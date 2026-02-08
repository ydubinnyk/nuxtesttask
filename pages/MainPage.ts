import { type Page } from '@playwright/test';

export class MainPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/wiki/Main_Page');
  }

  /** Navigates to the login page. Use this instead of clicking "Log in" to avoid language-dependent locators. */
  async gotoLogin() {
    await this.page.goto('/wiki/Special:UserLogin');
  }
}
