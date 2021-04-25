import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

const ChartWrapper = styled.div`

`;

const BarChart = ({ title, data, id }) => {

  const [chartConf, setChartConf] = useState({
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        datasets: [
          {
            label: title,
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#ff4d4f',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data,
          }
        ]
    }
  ) 

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

  useEffect(()=>{
    setChartConf({...chartConf, datasets: [{...chartConf.datasets[0], data: data}]});
  },[ data ])

  return (
    <ChartWrapper key={id}>
      <Bar
        data={{...chartConf}} 
        options={{...options}}
      />
    </ChartWrapper>
  )
}

BarChart.defaultProps = {
    title: '',
    id: 0,
}

export default BarChart;