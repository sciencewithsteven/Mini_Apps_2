import React from 'react';
import Chart from 'chart.js';

class DataChart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.makeGraph()
  }

  makeGraph() {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(this.props.historicalData),
        datasets: [
          {
            label: `Bitcoin: ${this.props.usd} $${this.props.currentValue}`,
            data: Object.values(this.props.historicalData),
            backgroundColor:
              [
                'rgba(255, 255, 255, 0.4)'
              ],
            borderColor:
              [
                'rgba(0,0,0,0.2)',
                'rgba(166,246,147,1)',
                'rgba(166,246,147,1)',
                'rgba(181, 7, 36, 1)',
                'rgba(181, 7, 36, 1)',
                'rgba(166,246,147,1)',
                'rgba(181, 7, 36, 1)',
                'rgba(166,246,147,1)',
                'rgba(181, 7, 36, 1)',
                'rgba(181, 7, 36, 1)',
                'rgba(181, 7, 36, 1)',
                'rgba(166,246,147,1)',
                'rgba(166,246,147,1)',
                'rgba(181, 7, 36, 1)',
                'rgba(166,246,147,1)',
                'rgba(166,246,147,1)',
                'rgba(166,246,147,1)',
                'rgba(166,246,147,1)',
                'rgba(166,246,147,1)',
                'rgba(181, 7, 36, 1)',
                'rgba(166,246,147,1)',
                'rgba(166,246,147,1)',
                'rgba(181, 7, 36, 1)',
                'rgba(181, 7, 36, 1)',
                'rgba(166,246,147,1)',
                'rgba(181, 7, 36, 1)',
                'rgba(181, 7, 36, 1)',
                'rgba(166,246,147,1)',
                'rgba(181, 7, 36, 1)',
                'rgba(166,246,147,1)'
              ],
            borderWidth: 5
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 8600
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <React.Fragment>

        <canvas
          id="myChart"
          width="300px"
          height="300px"/>

      </React.Fragment>
    )
  }
};

export default DataChart;