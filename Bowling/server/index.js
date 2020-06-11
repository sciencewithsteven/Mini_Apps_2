const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4060;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/current', (req, res) => {

  axios('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(current => {
      // console.log(`Current: `, current.data.bpi);
        res.json(current.data.bpi)
      })
    .catch(error => console.error(error));
});

app.get('/history', (req, res) => {

  axios('https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-05-12&end=2020-06-11')
    .then(history => {
      res.json(history.data.bpi)
    })
    .catch(error => console.error(error));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));