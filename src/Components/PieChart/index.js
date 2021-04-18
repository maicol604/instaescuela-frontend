import React, {useLayoutEffect, useState} from 'react';
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
];

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const PieChart = ({data}) => {
    const [width, height] = useWindowSize();
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
    
    const options = {
        legend: {
            position: (width>1140)?'right':'bottom',
        },
        //circumference: Math.PI,
        //rotation: 1.0 * Math.PI,
        cutoutPercentage: 70
    }
    
    return (
        <PieWrapper>
            <Doughnut data={{...config}} options={options} width={50} height={50}/>
        </PieWrapper>
    )
};

PieChart.defaultProps = {
    data: [],
}

export default PieChart;