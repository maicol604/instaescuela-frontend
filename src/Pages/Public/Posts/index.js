import React, { useState } from 'react';
import styled from 'styled-components';
import {Row, Col} from 'antd';

import Button from '../../../Components/Button';
import Post from '../../../Components/Post';

const PostsWrapper = styled.div`
    .lazy-load-post-container {
        width: 100%;
        text-align: center;
        padding: 2em;
    }
`;

const Npost = 15;

const Posts = ({posts, avatar}) => {

    const [postCount, setPostCount] = useState(Npost);

    const handlePostCount = () => {
        if((postCount+Npost)<posts.length) {
            setPostCount(postCount+Npost);
        }
        else {
            setPostCount(posts.length);
        }
    }

    return (
        <PostsWrapper>
            <Row
                gutter={[15, 15]}
            >
                {posts.slice(0,postCount).map((data,index)=>{
                    return (
                        <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 8 }} key={index} style={{display: 'flex'}}>
                            <Post
                                data={data}
                                avatar={avatar}
                                userName='instaescuela'
                            />
                        </Col>
                    )
                })}
            </Row>
            {postCount!==posts.length?
            <div className='lazy-load-post-container'>
                <Button onClick={handlePostCount}>
                    Load more posts
                </Button>
            </div>
            :''}
        </PostsWrapper>
    )
}

Posts.defaultProps = {
    posts: [],
}

export default Posts;