import React, { useLayoutEffect, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';


const App = () => {
  const [chartData, setChartData] = useState({});

  const getBTCinfo = () => {
    fetch('btc/20190101/20190131')
      .then(response => response.json())
      .then(json => setChartData(json.bpi))
      .catch(err => console.log(err));
  }

  useEffect(getBTCinfo, []);

  const makeChart = () => {
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(chartData),
        datasets: [{
          label: 'BTC price in USD',
          data: Object.values(chartData),
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  useLayoutEffect(makeChart);

  return (
    <>
      <h1>BitCoin Prices</h1>
      <h2>January, 2019</h2>
      <canvas id="myChart" width="400" height="150"></canvas>
      <p>Powered by CoinDesk</p>

    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

