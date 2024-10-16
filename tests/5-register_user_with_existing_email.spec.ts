import { test, expect } from '@playwright/test';

test('Register User with existing email', async ({ page }) => {

  await page.goto('http://automationexercise.com');

  await expect(page).toHaveTitle('Automation Exercise');

  await page.click('a[href="/login"]');

  const newUserSignupText = await page.locator('h2:has-text("New User Signup!")');
  await expect(newUserSignupText).toBeVisible();

  await page.fill('input[data-qa="signup-name"]', 'TestUser');
  await page.fill('input[data-qa="signup-email"]', 'existing_user@example.com');

  await page.click('button[data-qa="signup-button"]');

  const errorText = await page.locator('p:has-text("Email Address already exist!")');

  await page.close();
});
