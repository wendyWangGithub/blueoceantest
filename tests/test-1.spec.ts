import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.baidu.com/');
  await page.locator('#kw').fill('你好');
  await page.locator('#kw').press('Enter');
  await expect(page.getByText('网页', { exact: true })).toBeVisible();
});