import React from 'react';
import styled from 'styled-components';

import utils from '../../Utils';

const PostWrapper = styled.div`
    margin: .5em;
    border-radius: 1em;
    box-shadow: 10px -10px 150px rgba(0, 0, 0, 0.1);
    background-color: var(--secondary-bg-color);
    .content {
        padding: 1em;
    }
    .header {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        border-bottom: 1px solid var(--soft-border-color);
        .date {
            color: var(--secondary-text-color)
        }
    }
`;

const Post = ({data}) => {
    if(data)
        return (
            <PostWrapper>
                <div>
                    <div className='header'>
                        <div>Avatar</div>
                        <div className='date'>{utils.formatDate(data.timestamp)+''}</div>
                    </div>
                    <span>
                        <img src={data.media_url} alt=''/>
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