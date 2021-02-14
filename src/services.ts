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
    console.log(tweets[i]);
    const primeiro = i == 0;
    page.click(primeiro ? '[data-contents] > div > div' : '[role="group"] > div > div');
    await page.waitForTimeout(1000);
    await page.keyboard.type(tweets[i], { delay: 45 });
    await page.click(primeiro ? 'div[role="button"][data-testid="tweetButtonInline"]' : 'div[role="button"][data-testid="tweetButton"]');
    await page.waitForTimeout(2000);
  }
}

export const Logout = async (browser: Browser) => {
  await browser.close();
}
