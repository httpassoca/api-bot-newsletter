import { Page } from "puppeteer";

export default async (page: Page) => {
  await page.goto('https://twitter.com/login');
  await page.waitForTimeout(1000);
  await page.type('input', 'DeschampsNews', { delay: 110 });
  await page.type('input[type="password"]', process.env.PASSWORD as string,  { delay: 110 });
  await page.keyboard.press('Enter');
  await page.waitForTimeout(4000);
}