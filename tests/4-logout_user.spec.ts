import { test, expect } from '@playwright/test';

test('Logout User', async ({ page }) => {

  await page.goto('http://automationexercise.com');

  await expect(page).toHaveTitle('Automation Exercise');

  await page.click('a[href="/login"]');

  const loginHeader = await page.locator('h2:has-text("Login to your account")');
  await expect(loginHeader).toBeVisible();

  await page.fill('input[data-qa="login-email"]', 'nesr_234@example.com');
  await page.fill('input[data-qa="login-password"]', 'user1234');

  await page.click('button[data-qa="login-button"]');

  await page.click('a[href="/logout"]');

  const loginPage = await page.locator('h2:has-text("Login to your account")');
  await expect(loginPage).toBeVisible();

  await page.close();
});
