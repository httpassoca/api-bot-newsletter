import express from 'express';
import routes from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';
require('dotenv/config');

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

routes(app);

app.listen(8080, () => {
  console.log("Server is running 😂");
});

module.exports = app;
