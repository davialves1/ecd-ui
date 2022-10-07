import { test, expect } from '@playwright/test';

test.describe('Test Hello World Page', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:3000');
    });

    test('hello world page is running', async ({page}) => {
        await expect(page).toBeTruthy();
    });

    test('title is set correctly', async ({page}) => {
        await expect(page).toHaveTitle('ECD: Emission Compliance Database');
    });

    test('text of the page is correct', async ({page}) => {
        const text = page.locator('text=Hello World App Checklist');
        await expect(text).toBeTruthy();
    });

    test('the button for toggle language has the right text', async ({page}) => {
        const button = page.locator('#i-button');
        await expect(button).toHaveText('Switch language to German');
    });

    test('button is toggling language', async ({page}) => {
        const button = page.locator('#i-button');
        await expect(button).toHaveText('Switch language to German');
        await button.click();
        await expect(button).toHaveText('Sprache auf Englisch umstellen');
    })
});
