import { Express, Request, Response } from "express";
import { launch } from "puppeteer";
import { Login, Tweet, Logout } from './services';

export default (app: Express) => {
  app.post("/newsletter", async (req: Request, res: Response) => {
    const { _new } = req.body;
    const browser = await launch({headless: false});
    const page = await browser.newPage();
    await Login(page);
    await Tweet(page, _new);
    await Logout(browser);
    return res.send("Atualizado!");
  })
}