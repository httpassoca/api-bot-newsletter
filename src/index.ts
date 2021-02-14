import express from 'express';
import { launch } from 'puppeteer';
import routes from './routes';
import Login from './services/login';
import cors from 'cors';
require('dotenv/config');

const app = express();

(async () => {
  const browser = await launch({headless: false});
  const page = await browser.newPage();
  await Login(page);
  
  routes(app, page);
})();

app.use(cors());
app.use(express.json());
app.listen(3030, () => {
  console.log("Server is running 😂")
});

module.exports = app;
