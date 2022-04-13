require('colors');
const mongoose = require('mongoose');
const { MESSAGES } = require('../utils/constants');

const app = require('../app');

const { PORT = 3000, DB_HOST } = process.env;

mongoose
  .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(MESSAGES.DB_CONNECTION_SUCCESS.green);

    app.listen(PORT, () => {
      console.log(`${MESSAGES.SERV_CONNECTION_SUCCESS} on port ${PORT.cyan}`.green)
    });
  })
  .catch(err => {
    console.log(MESSAGES.DB_CONNECTION_ERROR.red);
    console.log(err.message);
    process.exit(1);
  });