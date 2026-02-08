import { type Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  /** Fills credentials and submits. Handles both en.wikipedia.org and auth.wikimedia.org login forms. */
  async login(username: string, password: string) {
    await this.page.waitForLoadState('domcontentloaded');

    // Use stable IDs; avoid getByLabel/getByRole as labels vary by UI language
    const usernameInput = this.page.locator('#wpName1');
    const passwordInput = this.page.locator('#wpPassword1');
    const submitButton = this.page.locator('#wpLoginAttempt');

    await usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    await usernameInput.fill(username);
    await passwordInput.fill(password);
    await submitButton.click();
  }

  /** Waits for successful login (redirect away from login page) */
  async waitForLoginSuccess() {
    await this.page.waitForURL(
      url => !url.pathname.includes('UserLogin') && !url.pathname.includes('login'),
      { timeout: 15000 }
    );
  }
}
