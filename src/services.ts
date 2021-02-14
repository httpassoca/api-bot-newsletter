import { Browser, Page } from "puppeteer";
import arrayOfTweets from './helpers';

export const Login = async (page: Page) => {
  await page.goto('https://twitter.com/login');
  await page.waitForTimeout(1000);
  await page.type('input', 'DeschampsNews', { delay: 110 });
  await page.type('input[type="password"]', process.env.PASSWORD as string,  { delay: 110 });
  await page.keyboard.press('Enter');
  await page.waitForTimeout(4000);
}

export const Tweet = async (page: Page, tweet: string) => {
  const tweets = arrayOfTweets(tweet);
  for (let i = 0; i < tweets.length; i++) {
    await page.click('[data-contents] > div > div');
    await page.keyboard.type(tweets[i], { delay: 60 });
    await page.click('div[role="button"][data-testid="tweetButtonInline"]');
    await page.waitForTimeout(2000);
    
  }
}

export const Logout = async (browser: Browser) => {
  await browser.close();
}
