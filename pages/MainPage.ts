import { type Page } from '@playwright/test';

export class MainPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/wiki/Main_Page');
  }

  /** Clicks the Log in link in the header (visible when not logged in) */
  async clickLogIn() {
    await this.page.getByRole('link', { name: 'Log in' }).click();
  }
}
