import mongoose from 'mongoose';
import { MESSAGES } from '../helpers/constants';
import app from '../app';

const PORT = Number(process.env.PORT) || 3000;
const DB_HOST = String(process.env.DB_HOST);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(MESSAGES.DB_CONNECTION_SUCCESS);

    app.listen(PORT, () => {
      console.log(`${MESSAGES.SERV_CONNECTION_SUCCESS} on port ${PORT}`)
    });
  })
  .catch(err => {
    console.log(MESSAGES.DB_CONNECTION_ERROR);
    console.log(err.message);
    process.exit(1);
  });