import express from 'express';
import { json } from 'body-parser';
import { userRoute, authRoute } from './routes';

const app = express();
app.use(json());

app.get('/', async (req, res) => {
  res.status(200).send({ message: 'hello world' });
});
app.use('/user', userRoute);
app.use('/auth', authRoute);

export default app;
