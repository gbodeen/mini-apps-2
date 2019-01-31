const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./router');

app.use(router);
app.use(express.static('challenge_3/public'));

app.listen(port);

