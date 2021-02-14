import { launch } from 'puppeteer';
import Login from './services/login';
import Tweet from './services/tweet';
require('dotenv/config');

(async () => {
  const browser = await launch({headless: false});
  const page = await browser.newPage();
  await Login(page);
  await Tweet(page, 'Novo tweet!');
})();