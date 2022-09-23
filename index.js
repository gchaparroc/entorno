const express = require('express');
const app = express();
const port = 3000;

app.get('/', () => {
  res.send('Hola mi server en express');
})

app.listen(port, () => {
  console.log('Mi port' + port);
})
