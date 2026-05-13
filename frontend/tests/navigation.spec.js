import { test, expect } from '@playwright/test';

test.describe('Navigation and Layout', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Home page loads and hero title is visible', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('Event Ledger');
    });

    test('Planner link navigates to planner page', async ({ page }) => {
        await page.getByRole('link', { name: 'Planner' }).click();
        await expect(page).toHaveURL(/.*\/planner/);
    });

    test('CTA link navigates to planner page', async ({ page }) => {
        await page.getByRole('link', { name: 'Start Planning Now' }).click();
        await expect(page).toHaveURL(/.*\/planner/);
    });

    test('Event Ledger brand link navigates back to home page', async ({ page }) => {
        await page.getByRole('link', { name: 'Planner' }).click();
        await page.getByRole('link', { name: 'Event Ledger' }).click();
        await expect(page).toHaveURL('/');
    });

    test('Header and footer visible in home page', async ({ page }) => {
        await expect(page.getByRole('banner')).toBeVisible();
        await expect(page.getByRole('contentinfo')).toBeVisible();
    });

    test('Header and footer visible in planner page', async ({ page }) => {
        await page.getByRole('link', { name: 'Planner' }).click();
        await expect(page.getByRole('banner')).toBeVisible();
        await expect(page.getByRole('contentinfo')).toBeVisible();
    });
});