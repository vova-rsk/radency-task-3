import app from '../app';
import { sequelize } from '../db';
import { MESSAGES } from '../helpers/constants';

const PORT = Number(process.env.PORT) || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log(MESSAGES.DB_CONNECTION_SUCCESS);
    
    app.listen(PORT, () => {
      console.log(`${MESSAGES.SERV_CONNECTION_SUCCESS} on port ${PORT}`)
    });
  })
  .catch((err:object) => { 
    console.log(MESSAGES.DB_CONNECTION_ERROR);
    console.error(err);
    process.exit(1);
  });

export default { sequelize };



