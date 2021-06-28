const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// routes
require('./server.route')(app);

app.listen(port, () => {
  console.log(`server listening to http://localhost:${port}`);
});
