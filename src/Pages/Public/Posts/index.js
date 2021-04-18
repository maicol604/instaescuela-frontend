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

const Posts = ({posts}) => {

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
                gutter={[10, 10]}
            >
                {posts.slice(0,postCount).map((data,index)=>{
                    return (
                        <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 8 }} key={index}>
                            <Post
                                data={data}
                                avatar={'https://scontent-lga3-1.xx.fbcdn.net/v/t51.2885-15/36912147_333497493855464_191442841459752960_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=86c713&_nc_ohc=2NgT-kuv8WIAX8vrWJl&_nc_ht=scontent-lga3-1.xx&oh=1244dea710bdb805fa349297b351d186&oe=609D836E'}
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