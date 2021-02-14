const puppeteer = require('puppeteer');

(async ()=> {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://twitter.com/login');
  await page.waitForNavigation();
  await page.screenshot({ path: './src/example.png'});
  await browser.close();
})();