import { launch } from 'puppeteer';
require('dotenv/config');

(async () => {
  const browser = await launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://twitter.com/login');
  await page.waitForTimeout(2000);
  await page.type('input', 'DeschampsNews', { delay: 110 });
  await page.type('input[type="password"]', process.env.PASSWORD as string,  { delay: 110 });
  await page.keyboard.press('Enter');
  // await browser.close()
})();