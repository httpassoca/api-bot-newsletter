import express, { Response } from 'express';
const app = express();

app.post('/tweet', (_, res: Response) => {
  res.send('ABACATE');
});

app.listen(3030, () => {
  console.log("Server is running 😂")
});

module.exports = app;
