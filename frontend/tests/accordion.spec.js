import { test, expect } from '@playwright/test';

test.describe('Accordion Behavior', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/planner');
    });

    test('Venue accordion open by default', async ({ page }) => {
        const venueAccordion = page.getByRole('button').filter({ hasText: 'Select Venue Room' });

        await expect(venueAccordion).toHaveAttribute('aria-expanded', 'true');
    });

    test('Accordion can open and close', async ({ page }) => {
        const addOnsAccordion = page.getByRole('button').filter({ hasText: 'Add-ons & Equipment' });

        await addOnsAccordion.click();
        await expect(addOnsAccordion).toHaveAttribute('aria-expanded', 'true');

        await addOnsAccordion.click();
        await expect(addOnsAccordion).toHaveAttribute('aria-expanded', 'false');
    });

    test('One accordion open at a time', async ({ page }) => {
        const venueAccordion = page.getByRole('button').filter({ hasText: 'Select Venue Room' });
        const addOnsAccordion = page.getByRole('button').filter({ hasText: 'Add-ons & Equipment' });
        const mealsAccordion = page.getByRole('button').filter({ hasText: 'Meals & Catering' });

        await expect(venueAccordion).toHaveAttribute('aria-expanded', 'true');
        await expect(addOnsAccordion).toHaveAttribute('aria-expanded', 'false');
        await expect(mealsAccordion).toHaveAttribute('aria-expanded', 'false');

        await mealsAccordion.click();

        await expect(venueAccordion).toHaveAttribute('aria-expanded', 'false');
        await expect(addOnsAccordion).toHaveAttribute('aria-expanded', 'false');
        await expect(mealsAccordion).toHaveAttribute('aria-expanded', 'true');
    });
});