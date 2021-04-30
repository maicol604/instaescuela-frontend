import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Card from '../../../Components/Card';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import utils from '../../../Utils';

const OverviewWrapper = styled.div`
    width: 100%;
    margin-bottom: 1em;
    .average-card {
        padding: 0 1em 1em 1em;
        h2 {
            font-size: 3em;
            font-weight: 600;
            margin: .5em 0em .25em 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .title-container {
            font-weight: 600;
            display:  flex;
            align-items: center;
            font-size: 1.25em;
            .icon-container {
                color: var(--secondary-text-color);
                margin-left: .5em;
            }
        }
        .arrow-up, .arrow-down {
            width: 1.25em;
            height: 1.25em;
            font-size: .5em;
            padding: 1em;
            border-radius: 50%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .arrow-down {
            color: var(--less-color);
            background-color: var(--less-bg-color);
        }
        .arrow-up {
            color: var(--more-color);
            background-color: var(--more-bg-color);
        }
    }
`;

const Overview = ({stats}) => {

    const [state, setState] = useState({
        averageDailyGrowth: 0,
        averageMonthlyGrowth: 0,
        last30daysFollowerGrowth: 0,
        last7daysFollowerGrowth: 0,
    })

    useEffect(()=>{
        let averageDailyGrowth= 0;
        let averageMonthlyGrowth= 0;
        let last30daysFollowerGrowth= 0;
        let last7daysFollowerGrowth= 0;
        for(let i=0;i<stats.length;i++){
            //console.log(stats[i])
            let diference = 0;
            if(stats.length>=30 && i<30){
                if(stats[i].followers_count.prev_count && stats[i].followers_count.prev_count!==0)
                    diference = stats[i].followers_count.count-stats[i].followers_count.prev_count;
                last30daysFollowerGrowth = last30daysFollowerGrowth + diference;
            }
            diference = 0;
            if(stats.length>=7 && i<30){
                if(stats[i].followers_count.prev_count && stats[i].followers_count.prev_count!==0)
                    diference = stats[i].followers_count.count-stats[i].followers_count.prev_count;
                last7daysFollowerGrowth = last7daysFollowerGrowth + diference;
            }
            diference = 0;
            if(stats[i].followers_count.prev_count && stats[i].followers_count.prev_count!==0)
                diference = stats[i].followers_count.count-stats[i].followers_count.prev_count;
            averageDailyGrowth = averageDailyGrowth + diference;
        }
        if(averageDailyGrowth!==0)
            averageDailyGrowth = averageDailyGrowth / stats.length;
        if(last7daysFollowerGrowth!==0)
            last7daysFollowerGrowth = last7daysFollowerGrowth / 7;
        if(last30daysFollowerGrowth!==0)
            last30daysFollowerGrowth = last30daysFollowerGrowth / 30;
        setState({
            ...state, 
            averageDailyGrowth,
            last30daysFollowerGrowth,
            last7daysFollowerGrowth,
            averageMonthlyGrowth,
        });
    },[])

    return (
        <OverviewWrapper>
        <Row
            gutter={[15, 15]}
        >
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }} style={{display: 'flex'}}>
                <Card
                >
                    <div className='average-card'>
                        <h2>{state.last7daysFollowerGrowth!==0?utils.round(state.last7daysFollowerGrowth):'-'}</h2>
                        <div className='title-container'>
                            Last 7 days follower growth  
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }} style={{display: 'flex'}}>
                <Card
                >
                    <div className='average-card'>
                        <h2>{state.last30daysFollowerGrowth!==0?utils.round(state.last30daysFollowerGrowth):'-'}</h2>
                        <div className='title-container'>
                            Last 30 days Follower Growth 
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }} style={{display: 'flex'}}>
                <Card
                >
                    <div className='average-card'>
                        <h2>
                            {state.averageDailyGrowth!==0?utils.round(state.averageDailyGrowth):'-'}
                            {state.averageDailyGrowth>0?<span className={'arrow-up'}><ArrowUpOutlined /></span>:''}
                            {state.averageDailyGrowth<0?<span className={'arrow-down'}><ArrowDownOutlined /></span>:''}
                        </h2>
                        <div className='title-container'>
                            Average daily growth 
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }} style={{display: 'flex'}}>
                <Card
                >
                    <div className='average-card'>
                        <h2>{state.averageMonthlyGrowth!==0?utils.round(state.averageMonthlyGrowth):'-'}</h2>
                        <div className='title-container'>
                            Average monthly growth 
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12}} style={{display: 'flex'}}>
                <Card
                >
                </Card>
            </Col>
            {/*<Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12}} style={{display: 'flex'}}>
                <Card
                >
                </Card>
            </Col>*/}
        </Row>
        </OverviewWrapper>
    )
}

export default Overview;