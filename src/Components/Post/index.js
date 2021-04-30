import React from 'react';
import styled from 'styled-components';

import utils from '../../Utils';
import Avatar from '../Avatar';

const PostWrapper = styled.div`
    margin: .5em;
    border-radius: 1em;
    box-shadow: 10px -10px 150px rgba(0, 0, 0, 0.1);
    background-color: var(--secondary-bg-color);
    width: 100%;
    .content {
        padding: 1em;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        border-bottom: 1px solid var(--soft-border-color);
        .date {
            color: var(--secondary-text-color)
        }
    }
    .post-image {
        position: relative;
        display: flex;
        .image-footer {
            position: absolute;
            bottom: .5em;
            left: 1em;
            display: flex;
            .engagement, .media-type {
                background-color: var(--secondary-bg-color);
                box-shadow: 2px 5px 15px 3px rgba(0, 0, 0, 0.09);
                padding: .5em 1em;
                margin-right: 1em;
                font-weight: 600;
            }
        }
    }
`;

const Post = ({data, avatar, userName}) => {
    if(data)
        return (
            <PostWrapper>
                <div>
                    <div className='header'>
                        <div>
                            <Avatar 
                                src={avatar}
                                userName={userName}
                            />
                        </div>
                        <div>
                            
                        </div>
                        <div className='date'>{utils.formatDate(data.timestamp)+''}</div>
                    </div>
                    <span className='post-image'>
                        {data.media_type!=='VIDEO'?
                            <img src={data.media_url} alt=''/>
                        :
                            <video src={data.media_url} alt='' controls="controls"/>
                        } 
                        <div className='image-footer'>
                            {data.media_type!=='VIDEO'?
                                <div className='media-type'>{data.media_type==='IMAGE'?'Photo':'Carousel'}</div>
                                :
                                <div className='media-type'>Video</div>
                            }
                            <div className='engagement'>{`${utils.round(data.engagement)}%`} Engagement</div>
                        </div>
                    </span>
                    <div className='content'>
                        {data.caption}
                    </div>
                </div>
            </PostWrapper>
        )
    else 
        return (
            ''
        )
}

Post.defaultProps = {
    data: null,
}

export default Post;