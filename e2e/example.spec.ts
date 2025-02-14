import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bjss.com/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.getByRole('heading', { name: 'We solve complex technology' }).click({
    button: 'right'
  });
  await page.locator('#inner-page-hero').getByRole('button', { name: 'Previous slide' }).click();
  await expect(page.getByRole('heading', { name: 'We solve complex technology' })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Contact Us');
  await expect(page.getByRole('banner')).toContainText('Industries');
});