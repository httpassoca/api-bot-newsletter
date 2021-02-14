import { Express, Request, Response } from "express";
import { launch } from "puppeteer";
import { Login, Tweet, Logout } from './services';

export default (app: Express) => {
  app.post("/newsletter", async (req: Request, res: Response) => {
    const { tweet } = req.body;
    const browser = await launch({headless: false});
    const page = await browser.newPage();
    await Login(page);
    await Tweet(page, tweet);
    await Logout(browser);
    return res.send("Atualizado!");
  })
}