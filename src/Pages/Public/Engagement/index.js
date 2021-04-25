import React from 'react';
import styled from 'styled-components';
import { Row, Col, Tooltip } from 'antd';
import Utils from '../../../Utils';
import { InfoCircleOutlined } from '@ant-design/icons';

import Card from '../../../Components/Card';
import BarChart from '../../../Components/BarChart';
import LineChart from '../../../Components/LineChart';

const EngagementWrapper = styled.div`
    
    .average-card {
        padding: 0 1em 1em 1em;
        h2 {
            font-size: 3em;
            font-weight: 600;
            margin: .5em .5em .25em 0;
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
    }
`;

const EngagementValues = [
    {
        min: 100,
        max: 500,
        percent: 11.5
    },
    {
        min: 500,
        max: 1000,
        percent: 8.4
    },
    {
        min: 1000,
        max: 5000,
        percent: 5.7
    },
    {
        min: 5000,
        max: 10000,
        percent: 4.2
    },
    {
        min: 10000,
        max: 50000,
        percent: 3.8
    },
    {
        min: 50000,
        max: 50000000000,
        percent: 1.9
    },
];

const EngagementBar = styled.div`
    width: 100%;
    padding: 1em 1em 2em 1em;
    .engagement-bar {
        height: 1.5em;
        width: 100%;
        border-radius: .25em;
        background-color: var(--error-color);
        position: relative;
        .status-bar-container {
            position: absolute;
            top: -.25em;
            left: 0;
            left: ${props => props.barPercent ? props.barPercent : 'auto'};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: var(--error-color);
            .status-bar {
                width: 1em;
                height: 2em;
                background-color: var(--secondary-bg-color);
                border: 1px solid var(--soft-border-color);
                border-radius: .25em; 
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    height: 1em;
                    border-left: 2px dotted var(--less-color);
                    z-index: 1;
                    width: 2px;
                    top: -1em;
                    left: calc(1em / 2 - 2px);
                }
                &::after {
                    content: "";
                    position: absolute;
                    height: 1em;
                    border-left: 2px dotted var(--less-color);
                    z-index: 1;
                    width: 2px;
                    bottom: -1em;
                    left: calc(1em / 2 - 2px);
                }
            }
            .engagement-value {
                padding: .25em .5em;
                margin-top: 1.25em;
                border-radius: .25em;
                background-color: var(--less-bg-color);
                font-weight: 600;
                position: absolute;
                bottom: -3.5em;
            }
        }
    }
    .range-values {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: .5em;
        color: var(--error-color);
        font-weight: 600;
    }
    &.positive {
        .engagement-bar {
            background-color: var(--successfully-color);
            .status-bar-container {
                .status-bar {
                    &::before {
                        border-left: 2px dotted var(--more-color);
                    }
                    &::after {
                        border-left: 2px dotted var(--more-color);
                    }
                }
                .engagement-value {
                    color: var(--successfully-color);
                    background-color: var(--more-bg-color);
                }
            }
        }
        .range-values {
            color: var(--successfully-color);
            .min {

            }
            .max {
                position: absolute;
                left: ${props=>props.maxValuePosition?props.maxValuePosition:'0'};
            }
        }
    }
`;

const Engagement = ({ averageLikes, averageComment, averageEngagement, postingHabits, engagement, followers, key}) => {
    const engagementRange = EngagementValues.filter(data=>data.max>followers && followers>data.min)[0];
    const isPositive = engagement>engagementRange.percent;
    const percentage = Utils.round(engagement/engagementRange.percent*100,0);
    return (
        <EngagementWrapper>
            <Row
                gutter={[10, 10]}
            >
                <Col xs={{ span: 24 }} md={{span: 24}} lg={{ span: 24 }}>
                    <Card
                        title='Engagement rate'
                    >
                        <EngagementBar
                            barPercent={`calc(${percentage>100?100:percentage}% - .5em)`}
                            maxValuePosition={`${percentage>100?(100/percentage*100):100}%`}
                            className={isPositive?'positive':''}
                        >
                            <div className='engagement-bar '>
                                <div className='status-bar-container'>
                                    <span className='status-bar'></span>
                                    <span className='engagement-value'>{Utils.round(engagement)}</span>
                                </div>
                            </div>
                            <div className='range-values'>
                                <span className='min'>0</span>
                                <span className='max'>{engagementRange.percent}</span>
                            </div>
                        </EngagementBar>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12 }}>
                    <Card>
                        <div className='average-card'>
                            <h2>{Utils.round(averageLikes)}</h2>
                            <div className='title-container'>
                                Average likes 
                                <Tooltip placement="top" title={'The average number of likes received on all types of 90 last posts'}>
                                    <span className='icon-container'><InfoCircleOutlined /></span>
                                </Tooltip>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12 }}>
                    <Card>
                        <div className='average-card'>
                            <h2>{Utils.round(averageComment)}</h2>
                            <div className='title-container'>
                                Average comments 
                                <Tooltip placement="top" title={'The average number of comments received on all types of 90 last posts'}>
                                    <span className='icon-container'><InfoCircleOutlined /></span>
                                </Tooltip>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12 }}>
                    <Card
                        title={'Average engagement'}
                    >
                        <LineChart
                            data={averageEngagement}
                        />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12 }}>
                    <Card
                        title={'Posting habits'}
                    >
                        <BarChart
                            title = {'Posting habits '}
                            data = { postingHabits }
                            id={ key }
                        />
                    </Card>
                </Col>
            </Row>
        </EngagementWrapper>
    )
}

export default Engagement;