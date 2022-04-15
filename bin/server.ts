import mongoose from 'mongoose';
import { MESSAGES } from '../helpers/constants';
import app from '../app';

let PORT:string|number = '';
let DB_HOST = '';

if (process.env.DB_HOST && process.env.DB_HOST) {
  DB_HOST = process.env.DB_HOST;
  PORT = process.env.PORT || 3000;
} else {
  throw new Error("env variables PORT or DB_HOST not set");
}

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