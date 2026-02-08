import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { PreferencesPage } from '../pages/PreferencesPage';

test.describe('Interface language switching', () => {
  test.beforeEach(async ({ page }) => {
    test.skip(!process.env.WIKI_USERNAME || !process.env.WIKI_PASSWORD, 'Set WIKI_USERNAME and WIKI_PASSWORD in .env');

    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);

    await mainPage.gotoLogin();
    await loginPage.login(process.env.WIKI_USERNAME!, process.env.WIKI_PASSWORD!);
    await loginPage.waitForLoginSuccess();
  });

  test('authorized user can change interface language to German', async ({ page }) => {
    const preferencesPage = new PreferencesPage(page);
    await preferencesPage.goto();
    await preferencesPage.openUserProfileTab();
    await preferencesPage.selectInterfaceLanguage('de - Deutsch');
    await preferencesPage.save();

    await expect(preferencesPage.getLocalizedElement('Einstellungen')).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    if (!process.env.WIKI_USERNAME || !process.env.WIKI_PASSWORD) return;

    try {
      const preferencesPage = new PreferencesPage(page);
      await preferencesPage.goto();
      await preferencesPage.selectInterfaceLanguage('en - English');
      await preferencesPage.save();
    } catch {
      // Teardown best-effort; skip if test failed before login or page differs
    }
  });
});
