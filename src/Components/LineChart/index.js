import React from 'react';
import styled from 'styled-components';

import { Line } from 'react-chartjs-2';

const ChartWrapper = styled.div`

`;


const LineChart = ({ title, data }) => {
  console.log(data)
  const config = {
    labels: [...new Array(30).fill(0).map((data,index)=>`${index+1}`)],
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
        data: data
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
        data={{...config}} 
      />
    </ChartWrapper>
  )
}

LineChart.defaultProps = {
    title: '',
}

export default LineChart;