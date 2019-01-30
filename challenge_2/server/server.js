const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');

app.use(router);
app.use(express.static('challenge_2/public'));

app.listen(port);