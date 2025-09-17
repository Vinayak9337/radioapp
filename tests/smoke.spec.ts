import { test, expect } from '@playwright/test';

test.describe('Pickcel Console - Smoke', () => {
  test('homepage loads and has expected title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/pickcel/i);
  });
});

