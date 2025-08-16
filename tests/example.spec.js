const { test, expect } = require("@playwright/test");

test("homepage has title Playwright", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});
