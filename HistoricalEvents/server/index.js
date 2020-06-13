const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4060;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(morgan("dev"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));