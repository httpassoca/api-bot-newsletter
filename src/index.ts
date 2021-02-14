import { launch } from 'puppeteer';
require('dotenv/config');

(async () => {
  const browser = await launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://twitter.com/login');
  await page.waitForTimeout(1000);
  await page.type('input', 'DeschampsNews', { delay: 110 });
  await page.type('input[type="password"]', process.env.PASSWORD as string,  { delay: 110 });
  await page.keyboard.press('Enter');
  await page.waitForTimeout(4000);
  await page.screenshot({ path: "src/screenshot.png" })
  await page.click('[data-contents] > div > div');
  await page.keyboard.type('DeschampsNews', { delay: 110 });
  await page.click('div[role="button"][data-testid="tweetButtonInline"]');
  
  // await browser.close()
})();