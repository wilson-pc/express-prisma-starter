import app from './app';

require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
