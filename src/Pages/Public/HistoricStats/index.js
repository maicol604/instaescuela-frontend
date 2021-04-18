import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import Utils from '../../../Utils';

const HistoricStatsWrapper = styled.div`
    .stats-container {
        .bold {
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
      dataIndex: 'follower_count',
      key: 'follower_count',
      render: (item) => {
        return (
            <span className='bold'>{item}</span>
        )
      }
    },
    {
      title: 'Following Count',
      dataIndex: 'following_count',
      key: 'following_count',
      render: (item) => {
        return (
            <span className='bold'>{item}</span>
        )
      }
    },
    {
      title: 'Media Count',
      dataIndex: 'media_count',
      key: 'media_count',
    },
    {
      title: 'Engagement Rate',
      dataIndex: 'engagement_rate',
      key: 'engagement_rate',
    },
];

const HistoricStats = ({ stats }) => {
    let data = [...stats.map((item,index)=>{ 
        return {
            key:index, 
            date: Utils.formatDate(item.date).split(/(\d)*:/)[0], 
            follower_count:item.followers_count, 
            following_count: item.follows_count, 
            media_count:item.media_count 
        }
    })];

    return (
        <HistoricStatsWrapper>
            <h3>Historic stats</h3>
            <div className='stats-container'>
                <Table dataSource={data} columns={columns} />
            </div>
        </HistoricStatsWrapper>
    )
}

export default HistoricStats;