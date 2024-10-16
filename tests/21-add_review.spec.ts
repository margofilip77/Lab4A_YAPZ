import { test, expect } from '@playwright/test';

test('Add review on product', async ({ page }) => {

  await page.goto('http://automationexercise.com');

  await page.click('a[href="/products"]');

  const productsPageHeader = await page.locator('h2:has-text("All Products")');
  await expect(productsPageHeader).toBeVisible();

  await page.click('a[href="/product_details/1"]');

  const writeReviewSection = await page.locator('a:has-text("Write Your Review")');
  await expect(writeReviewSection).toBeVisible();

  await page.fill('input[id="name"]', 'Test User');
  await page.fill('input[id="email"]', 'testuser@example.com');
  await page.fill('textarea[name="review"]', 'This is a test review for the product.');

  await page.click('button[type="submit"]');

  const successMessage = await page.locator('span:has-text("Thank you for your review.")');
  await expect(successMessage).toBeVisible();

  await page.close();
});
