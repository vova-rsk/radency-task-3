const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const notesRouter = require('./routes/notes');
const { ERROR_MESSAGE } = require('./utils/messages');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/notes', notesRouter);

app.use((req, res) => {
    res.status(404).json({ message: ERROR_MESSAGE.notFound });
})

app.use((err, req, res, next) => {
    const { status = 500, message = ERROR_MESSAGE.serverError } = err;

  res.status(status).json({
    status: 'error',
    code: status,
    message
  })
})

module.exports = app