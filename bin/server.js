require('colors');
const { SUCCESS_MESSAGE } = require('../utils/messages');

const app = require('../app');

const { PORT = 3000 } = process.env;

try {
  app.listen(PORT, () => {
    console.log(`${SUCCESS_MESSAGE.serverStartedSuccess}: ${PORT.cyan}`.green);
  })
} catch (err) { 
  console.log(err.message);
  process.exit(1);
}
