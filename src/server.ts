import express from 'express';
import morgan from 'morgan';
import imagesRouter from './routes/images';

const app = express();

app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

app.use('/api/images', imagesRouter);

export default app;
