import express, { ErrorRequestHandler, Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import notesRouter from './routes';
import { MESSAGES } from './helpers/constants';

interface IErrorHandler extends ErrorRequestHandler {
      message?: string;
      status?: number;
}

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
const iconsDir = path.join(__dirname, 'public', 'icons');

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static(iconsDir));
app.use('/notes', notesRouter);

app.use((req, res) => {
  res.status(404).json({ message: MESSAGES.NOT_FOUND });
});

app.use((err:IErrorHandler, req:Request, res:Response) => {
  const { status = 500, message = MESSAGES.SERVER_ERROR } = err;

  res.status(status).json({
    status: 'error',
    code: status,
    message
  });
});

export default app;