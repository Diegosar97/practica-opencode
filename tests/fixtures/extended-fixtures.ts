import { test as base, Page } from '@playwright/test';

export const test = base.extend<{ page: Page }>({
  page: async ({ browser }, use) => {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      recordVideo: { dir: 'reports/videos' },
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});