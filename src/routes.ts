import { Express, Request, Response } from "express";
import { launch } from "puppeteer";
import { Login, Tweet, Logout } from './services';

export default (app: Express) => {
  app.post("/newsletter", async (req: Request, res: Response) => {
    console.log('Route newsletter 😎');
    const { news } = req.body;
    const browser = await launch({headless: false});
    const page = await browser.newPage();
    await Login(page);
    await Tweet(page, news);
    await Logout(browser);
    return res.send("Atualizado!");
  })
}