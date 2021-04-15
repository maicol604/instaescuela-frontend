import React,{ useState } from 'react';
import { Tabs, Progress } from 'antd';
import styled from 'styled-components';

import ig from '../../Assets/Img/instagram.svg';
import utils from '../../Utils';

const TitleWrapper = styled.div`
    display: flex;  
    align-items: center;
    .avatar-container {
        width: 2em;
        display: flex;
        overflow: hidden;
        border-radius: 50%;
    }
    .title {
        font-weight: 600;
        margin-left: .5em;
    }
`;

const TabsWrapper = styled.div`
    padding: 1em 0;
    h3 {
        font-size: 2.25em;
        font-weight: 600;
        margin: 0;
    }
    .tab-content {
        background-color: #fff;
        border-radius: 0 .75em .75em .75em;
        padding: 3em;
        display: flex;
        justify-content: space-between;
        .avatar-container {
            position: relative;
            width: min-content;
            height: min-content;
            >span {
                border-radius: 50%;
                overflow: hidden;
                width: 12em;
                display: flex;
            }
            .ig-logo {
                width: 3em;
                border-radius: 50%;
                position: absolute;
                bottom: 0;
                right: 0;
                border: 2px solid #fff;
            }
        }
        .description {
            padding: 0 2em 0 2em;
            display: flex;
            flex-direction: column;
            color: var(--secondary-text-color);
            font-size: 1.25em;
            width: 60%;
            .name {
                color: var(--main-text-color)
            }
            .account {
                display: flex;
                align-items: center;
                .type {
                    padding: .25em 1em;
                    background-color: var(--hastag-bg-color);
                    color: var(--secondary-text-color);
                    border-radius: .5em;
                    height: max-content;
                    margin-left: .5em;
                }
            }
        }
        .numbers-info {
            .numbers {
                display: flex;
                h3 {
                    display: block ruby; 
                }
                >div {
                    padding: 1em;
                    span {
                        color: var(--secondary-text-color);
                    }
                }
            }
            .engagement-data {
                display: flex;
                flex-direction: column;
                justify-content: center;
                div {
                    text-align: center;
                }
                .engagement-values {
                    display: flex;
                    flex-direction: column;
                    margin-top: 1em;
                    font-weight: 600;
                    .range-active {
                        &.successfully{
                            color: var(--successfully-color);
                        }
                        &.error{
                            color: var(--error-color);
                        }
                    }
                }
            }
        }
    }
    .ant-tabs-top > .ant-tabs-nav, .ant-tabs-bottom > .ant-tabs-nav, .ant-tabs-top > div > .ant-tabs-nav, .ant-tabs-bottom > div > .ant-tabs-nav {
        margin: 0;
    }
    .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {
        border-radius: .75em .75em 0 0 ;
        padding: 1em;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: var(--main-text-color);
    }
    .progress-children {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
            font-size: .5em;
        }
        .value {
            margin-bottom: .25em;
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

const engagementValue = 2.4;

const { TabPane } = Tabs;

const AccountTabs = ({accounts}) => {

    const [state, setState] = useState({
        activeKey:'0'
    });

    const handleChange = (activeKey) => {
        setState({...state, activeKey});
    }

    const userTabTitle = (data) => {
        return (
            <TitleWrapper>
                <span className='avatar-container'>
                    <img src={data.profile_picture_url} alt=''/>
                </span>
                <span className='title'>{data.username}</span>
            </TitleWrapper>
        )
    }

    return (
        <TabsWrapper>
            <Tabs
                hideAdd
                onChange={handleChange}
                activeKey={state.activeKey}
                type="editable-card"
            >
                {accounts.map((pane, index) => (
                    <TabPane tab={userTabTitle(pane)} key={`${index}`}>
                        <div className='tab-content'>
                            <div className='avatar-container'>
                                <span><img src={pane.profile_picture_url} alt=''/></span>
                                <span className='ig-logo'><img src={ig} alt=''/></span>
                            </div>
                            <div className='description'>
                                <span className='account'><h3>{pane.username}</h3><span className='type'>{pane.type}</span></span>
                                <span className='name'>{pane.name}</span>
                                <span  style={{whiteSpace:'pre-line'}}>{pane.biography}</span>
                                <span><a href={pane.website} target='_blank'>{pane.website}</a></span>
                            </div>
                            <div className='numbers-info'>
                                <div className='numbers'>
                                    <div>
                                        <h3>{utils.getNumber(pane.followers_count)}</h3>
                                        <span>Followers</span> 
                                    </div>
                                    <div>
                                        <h3>{utils.getNumber(pane.follows_count)}</h3>
                                        <span>Followings</span> 
                                    </div>
                                    <div>
                                        <h3>{utils.getNumber(pane.media_count)}</h3>
                                        <span>Posts</span> 
                                    </div>
                                </div>
                                <div className='engagement-data'>
                                    <div>
                                        <Progress type="circle" percent={(2.4/3.8)*100} format={()=><div className='progress-children'><span className='value'>2.4</span><span className='title'>Engagement</span><span className='title'>rate</span></div>} width={100} status="exception"/>
                                        {/*<Progress type="circle" percent={70} status="exception" />*/}
                                    </div>
                                    <div className='engagement-values'>
                                        {
                                            EngagementValues.map((data, index)=>{
                                                let flag = pane.followers_count>data.min && pane.followers_count<data.max;
                                                return (
                                                    <div key={index} className={flag?('range-active '+'error'):''}>
                                                        {data.max>5000000000?`More than ${utils.getNumber(data.min)} followers: ${data.percent}`:`From ${utils.getNumber(data.min)} to ${utils.getNumber(data.max)} followers: ${data.percent}`}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                ))}
            </Tabs>
        </TabsWrapper>
    )
}

AccountTabs.defaultProps = {
    accounts:[],
}

export default AccountTabs;