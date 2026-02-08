import { type Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  /** Fills credentials and submits. Handles both en.wikipedia.org and auth.wikimedia.org login forms. */
  async login(username: string, password: string) {
    await this.page.waitForLoadState('domcontentloaded');

    // Wikipedia uses #wpName1, #wpPassword1; auth.wikimedia.org may use getByLabel
    const usernameInput = this.page.locator('#wpName1').or(this.page.getByLabel(/username/i));
    const passwordInput = this.page.locator('#wpPassword1').or(this.page.getByLabel(/password/i));
    const submitButton = this.page.locator('#wpLoginAttempt').or(
      this.page.getByRole('button', { name: 'Log in' })
    );

    await usernameInput.first().waitFor({ state: 'visible', timeout: 10000 });
    await usernameInput.first().fill(username);
    await passwordInput.first().fill(password);
    await submitButton.first().click();
  }

  /** Waits for successful login (redirect away from login page) */
  async waitForLoginSuccess() {
    await this.page.waitForURL(
      url => !url.pathname.includes('UserLogin') && !url.pathname.includes('login'),
      { timeout: 15000 }
    );
  }
}
