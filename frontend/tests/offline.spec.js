import { test, expect } from '@playwright/test';

test.describe('Offline Fallback', () => {

    test.beforeEach(async ({ page }) => {
        await page.route('http://127.0.0.1:8000/api/venues/', route => route.abort());
        await page.route('http://127.0.0.1:8000/api/av-items/', route => route.abort());
        await page.route('http://127.0.0.1:8000/api/meals/', route => route.abort());
    });

    test('app loads fallback data when API is unreachable', async ({ page }) => {
        await page.goto('/planner');

        await expect(page.getByText('Small Meeting Room (Capacity:5)')).toBeVisible();

        await page.getByRole('button').filter({ hasText: 'Add-ons & Equipment' }).click();
        await expect(page.getByText('Wireless Handheld Mic')).toBeVisible();

        await page.getByRole('button').filter({ hasText: 'Meals & Catering' }).click();
        await expect(page.getByText('Cheese & Cracker Platter')).toBeVisible();
    });

    test('Console warnings', async ({ page }) => {
        const logs = [];

        page.on('console', (msg) => {
            logs.push(msg.text());
        });

        await page.goto('/planner');
        await page.waitForLoadState('networkidle');

        await expect(logs).toContain('Python Server is down. Switching to Offline Mode.');
    });

});