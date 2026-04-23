import { test as base, Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';

export interface ExtendedFixtures {
  page: Page;
  basePage: BasePage;
}

export const test = base.extend<ExtendedFixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
});

export { expect, Locator };