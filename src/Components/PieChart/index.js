import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

const PieWrapper = styled.div`
    .g2-html-annotation {
        overflow: auto !important;
        height: 1.5em;
    }
`;

const colors = [
    '#16BBE5',
    '#1CA7C2',
    '#5C90A8',
    '#55BD9A',
    '#FCAD73',
    '#F6D48D',
    '#285981',
    '#CF5E91',
    '#C65880',
    '#A26FA4',
]

const PieChart = ({data}) => {
    const config = {
        labels: [
          ...data.map(item=>item.type)
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [...data.map(item=>item.value)],
          backgroundColor: [
            ...colors
          ],
          hoverOffset: 4
        }]
    };
    return (
        <PieWrapper>
            <Doughnut data={{...config}} />
        </PieWrapper>
    )
};

PieChart.defaultProps = {
    data: [],
}

export default PieChart;