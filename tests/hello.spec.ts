import { test, expect } from '@playwright/test';

test('hello world page is running', async ({page}) => {
    await page.goto('http://localhost:3000');

    await expect(page).toBeTruthy;
});

test('title is set correctly', async ({page}) => {
    await page.goto('http://localhost:3000');

    await expect(page).toHaveTitle('ECD: Emission Compliance Database');
});

test('text of the page is correct', async ({page}) => {
    await page.goto('http://localhost:3000');
    const text = page.locator('text=Hello World App Checklist');
    await expect(text).toBeTruthy;
});

test('language change works', async ({page}) => {
    await page.goto('http://localhost:3000');
    const button = page.locator('text=Switch language to German')
    await expect(button).toBeTruthy;
});