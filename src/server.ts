import express, { Response } from 'express';
import routes from './routes';
import cors from 'cors';


const app = express();


app.use(cors());
app.use(express.json());
routes(app);

app.post('/tweet', (_, res: Response) => {
  res.send('ABACATE');
});

app.listen(3030, () => {
  console.log("Server is running 😂")
});

module.exports = app;
