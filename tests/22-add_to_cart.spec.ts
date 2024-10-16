import { test, expect } from '@playwright/test';

test('Add to cart from Recommended items', async ({ page }) => {

  await page.goto('http://automationexercise.com');

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  const recommendedItemsSection = await page.locator('h2:has-text("recommended items")');
  await expect(recommendedItemsSection).toBeVisible();

  await page.locator('a.add-to-cart').first().click();

  await page.click('a:has-text("View Cart")');

  const cartProduct = await page.locator('tbody tr');
  await expect(cartProduct).toBeVisible();

  await page.close();
});
