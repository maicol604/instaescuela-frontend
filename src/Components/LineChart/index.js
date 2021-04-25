import React from 'react';
import styled from 'styled-components';

import { Line } from 'react-chartjs-2';

const ChartWrapper = styled.div`

`;


const LineChart = ({ title }) => {

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: title,
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#ff4d4f',
        borderColor: '#ff4d4f',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#ff4d4f',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#ff4d4f',
        pointHoverBorderColor: '#ff4d4f',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  const options = {
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.yLabel;
        }
      }
    }
  }
  return (
    <ChartWrapper>
      <Line
        options={{...options}}
        data={{...data}} 
      />
    </ChartWrapper>
  )
}

LineChart.defaultProps = {
    title: '',
}

export default LineChart;