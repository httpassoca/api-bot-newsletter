import { Express, Response } from "express";

export default (app: Express) => {
  app.get("/tweet", (_, res: Response) => {
    res.send("tweetsss");
  })
}