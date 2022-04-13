const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const notesRouter = require('./routes/notes');
const { MESSAGES } = require('./utils/constants');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
const iconsDir = path.join(__dirname, 'public', 'icons');

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/icons', express.static(iconsDir));
app.use('/notes', notesRouter);

app.use((req, res) => {
    res.status(404).json({ message: MESSAGES.NOT_FOUND });
})

app.use((err, req, res, next) => {
    const { status = 500, message = MESSAGES.SERVER_ERROR } = err;

  res.status(status).json({
    status: 'error',
    code: status,
    message
  })
})

module.exports = app