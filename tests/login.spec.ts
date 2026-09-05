import { test, expect } from '@playwright/test';

test('login test', { tag: '@practicesoftwaretesting' }, async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByTestId('nav-sign-in').click();
  await page.getByTestId('email').fill('admin@practicesoftwaretesting.com');
  await page.getByTestId('password').fill('welcome01');
  await page.getByTestId('login-submit').click();
  await expect(page.getByTestId('nav-menu')).toContainText('John Doe');
});
