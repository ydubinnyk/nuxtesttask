import { type Page } from '@playwright/test';

export class PreferencesPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/wiki/Special:Preferences');
    await this.page.waitForLoadState('domcontentloaded');
  }

  /** Selects interface language from the Internationalization section (OOUI combobox, not native select).
   * Uses ID so it works regardless of current UI language (e.g. when reverting to English from German). */
  async selectInterfaceLanguage(languageCode: string) {
    const languageCombobox = this.page.locator('#mw-input-wplanguage');
    await languageCombobox.click();
    await this.page.getByRole('option', { name: new RegExp(languageCode, 'i') }).click();
  }

  /** Clicks the Save button to apply preferences. Uses #prefcontrol (stable across UI languages). */
  async save() {
    const saveButton = this.page.locator('#prefcontrol button');
    await saveButton.click();
  }

  /** Verifies the interface is displayed in the given language by checking for a known translated string */
  getLocalizedElement(localizedText: string) {
    return this.page.getByText(localizedText, { exact: false }).first();
  }
}
