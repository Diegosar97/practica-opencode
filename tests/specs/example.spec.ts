import { test, expect } from '../fixtures/test-fixtures';

test.describe('Example Test Suite', () => {
  test.beforeEach(async ({ basePage }) => {
    await basePage.navigate('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/.*/);
  });

  test('should display main content', async ({ basePage }) => {
    const hasContent = await basePage.isVisible('body');
    expect(hasContent).toBeTruthy();
  });
});