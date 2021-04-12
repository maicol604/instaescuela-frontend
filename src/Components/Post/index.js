import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
    margin: .5em;
    border-radius: 1em;
    box-shadow: 10px -10px 150px rgba(0, 0, 0, 0.1);
    background-color: var(--secondary-bg-color);
    .content {
        padding: 1em;
    }
`;

const Post = ({data}) => {
    if(data)
        return (
            <PostWrapper>
                <div>
                    <div>
                        avatar
                    </div>
                    <span>
                        <img src={data.thumbnail} alt=''/>
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