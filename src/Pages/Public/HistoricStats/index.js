import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import Utils from '../../../Utils';

const HistoricStatsWrapper = styled.div`
    padding: 1em;
    background-color: var(--secondary-bg-color);
    border-radius: .5em;
    .stats-container {
        .bold {
            font-weight: 600;
        }
        .less, .more {
            padding: .25em;
            border-radius: .25em;
            margin-left: .25em;
        }
        .less {
            color: var(--less-color);
            background-color: var(--less-bg-color);
        }
        .more {
            color: var(--more-color);
            background-color: var(--more-bg-color);
        }
        .ant-table-thead > tr > th {
            font-weight: 600;
        }
    }
`;
  
const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Follower Count',
      dataIndex: 'followers_count',
      key: 'followers_count',
      render: (item) => {
        let diference = 0;
        if(item.count!==item.prev_count && item.prev_count!==0)
            diference = item.count-item.prev_count;
        return (
            <span className='bold'>
                {item.count}
                {diference!==0?
                    <span className={diference>0?'more':'less'}>{`${diference>0?'+':''}${diference}`}</span>
                :''}
            </span>
        )
      }
    },
    {
      title: 'Following Count',
      dataIndex: 'following_count',
      key: 'following_count',
      render: (item) => {
        let diference = 0;
        if(item.count!==item.prev_count && item.prev_count!==0)
            diference = item.count-item.prev_count;
        return (
            <span className='bold'>
                {item.count}
                {diference!==0?
                    <span className={diference>0?'more':'less'}>{`${diference>0?'+':''}${diference}`}</span>
                :''}
            </span>
        )
      }
    },
    {
      title: 'Media Count',
      dataIndex: 'media_count',
      key: 'media_count',
      render: (item) => {
        let diference = 0;
        if(item.count!==item.prev_count && item.prev_count!==0)
            diference = item.count-item.prev_count;
        return (
            <span className='bold'>
                {item.count}
                {diference!==0?
                    <span className={diference>0?'more':'less'}>{`${diference>0?'+':''}${diference}`}</span>
                :''}
            </span>
        )
      }
    },
    {
        title: 'Engagement Rate',
        dataIndex: 'engagement_rate',
        key: 'engagement_rate',
        render: (item) => {
            let diference = 0;
            if(item.prev_count && Utils.round(item.count)!==Utils.round(item.prev_count) && item.prev_count!==0)
                diference = Utils.round(item.count)-Utils.round(item.prev_count);
            return (
                <span className='bold'>
                    {`${Utils.round(item.count)}%`}
                    {diference!==0?
                        <span className={diference>0?'more':'less'}>{`${diference>0?'+':''}${Utils.round(diference)}`}</span>
                    :''}
                </span>
            )
        }
    },
];

const HistoricStats = ({ stats }) => {
    let data = [...stats.map((item,index)=>{ 
        return {
            key:index, 
            date: Utils.formatDate(item.date).split(/(\d)*:/)[0], 
            followers_count:item.followers_count, 
            following_count: item.follows_count, 
            media_count:item.media_count,
            engagement_rate: item.engagement_rate
        }
    })].reverse();

    return (
        <HistoricStatsWrapper>
            <h3>Historic stats</h3>
            <div className='stats-container'>
                <Table dataSource={data} columns={columns} />
            </div>
        </HistoricStatsWrapper>
    )
}

HistoricStats.defaultProps = {
    stats:[]
}

export default HistoricStats;