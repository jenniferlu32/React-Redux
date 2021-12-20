const express = require('express');
const app = express();
const path = require('path');
const { db, syncAndSeed } = require('./db');
const router = require('./routes');

app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public', 'index.html')));

app.use('/api', router);

const init = async() => {
  try {
    await db.authenticate();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  } catch(err) {
    console.log(err);
  }
};

init();
