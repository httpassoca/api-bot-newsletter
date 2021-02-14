import { Page } from "puppeteer";

export default async (page: Page, tweet: string) => {
  await page.click('[data-contents] > div > div');
  await page.keyboard.type(tweet, { delay: 110 });
  await page.click('div[role="button"][data-testid="tweetButtonInline"]');
  await page.waitForTimeout(2000);
}