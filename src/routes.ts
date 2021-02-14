import { Express, Response, Request } from "express";
import { Page } from "puppeteer";
import Tweet from './services/tweet';


export default (app: Express, page: Page) => {
  app.post("/tweet", async (req: Request, res: Response) => {
    const { tweet } = req.body;
    await Tweet(page, tweet);
    res.send(tweet);
  })
}