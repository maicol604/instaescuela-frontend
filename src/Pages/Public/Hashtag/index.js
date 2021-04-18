import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'antd';
import Card from '../../../Components/Card';
import Utils from '../../../Utils';

import PieChart from '../../../Components/PieChart';


const HashtagWrapper = styled.div`
    .hashtag-container {
        width: 100%;
        display: inline-block;
        .hashtag-item {
            width: max-content;
            display: flex;
            float: left;
            padding: .25em .5em;
            margin: .25em;
            background-color: var(--hastag-bg-color);
            border-radius: .5em;
            border: 1px solid var(--soft-border-color);
        }
    }
`;

const Hashtag = ({ hashtag, count}) => {
    return (
        <HashtagWrapper>
            <Row
                gutter={[10, 10]}
            >
                <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12 }} style={{display: 'flex'}}>
                    <Card
                        title={'Top 10 hashtags'}
                    >
                        <div className='hashtag-container'>
                            {
                                hashtag.slice(0,10).map((data, index)=>{
                                    return (
                                        <span className='hashtag-item'>
                                            {`# ${data.caption} ${Utils.round((data.count/count)*100)}%`} 
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12 }}>
                    <Card
                        title={'Hashtags'}
                    >
                        <PieChart
                            data={hashtag.slice(0,10).map(data=>{return {value: data.count, type: '#'+data.caption}})}
                        />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{span: 24}} lg={{ span: 24 }}>
                    <Card
                        title={'Hashtag used in the last 90 posts'}
                    >
                        <div className='hashtag-container'>
                            {
                                hashtag.map((data, index)=>{
                                    return (
                                        <span className='hashtag-item'>
                                            #{ data.caption }
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </Card>
                </Col>
            </Row>
        </HashtagWrapper>
    )
}

Hashtag.defaultProps = {
    hashtag:[],
    hashtag_count: 0,
}

export default Hashtag;