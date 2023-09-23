/* eslint-disable no-console */
import { app } from './app';
import { connection } from './database';

const port = app.get('port');

connection()
  .then(() => {
    app.listen(port, () => {
      console.log(`The server is running on port: ${port}, and ready to server!`);
    });
  })
  .catch((error) => console.log(error, 'from the connection function call in the index main file!'));
