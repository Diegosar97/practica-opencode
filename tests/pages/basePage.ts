import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string = '/'): Promise<void> {
    const baseURL = process.env.BASE_URL || 'https://example.com';
    await this.page.goto(`${baseURL}${path}`);
  }

  async clickElement(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  async fillInput(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }

  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).textContent() || '';
  }

  async waitForSelector(selector: string): Promise<Locator> {
    return this.page.locator(selector).first();
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }

  async waitForNavigation(callback: () => Promise<void>): Promise<void> {
    await Promise.all([
      this.page.waitForNavigation(),
      callback(),
    ]);
  }
}