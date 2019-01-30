// We offer historical data from our Bitcoin Price Index through the following endpoint:
// https://api.coindesk.com/v1/bpi/historical/close.json
// By default, this will return the previous 31 days' worth of data. This endpoint accepts the following optional parameters:
// ?index=[USD/CNY]The index to return data for. Defaults to USD.
// ?currency=<VALUE>The currency to return the data in, specified in ISO 4217 format. Defaults to USD.
// ?start=<VALUE>&end=<VALUE> Allows data to be returned for a specific date range. Must be listed as a pair of start and end parameters, with dates supplied in the YYYY-MM-DD format, e.g. 2013-09-01 for September 1st, 2013.
const axios = require('axios');


const getBTCinfo = (startDate, endDate, callback) => {
  startDateFormatted = startDate.slice(0, 4) + '-' + startDate.slice(4, 6) + '-' + startDate.slice(6);
  endDateFormatted = endDate.slice(0, 4) + '-' + endDate.slice(4, 6) + '-' + endDate.slice(6);
  let url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDateFormatted}&end=${endDateFormatted}`
  axios.get(url)
    .then(response => {
      callback(null, response.data);
    })
    .catch(err => callback(err));
}

module.exports = getBTCinfo;