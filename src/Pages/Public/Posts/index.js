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
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} key={index}>
                            <Post
                                data={data}
                                avatar={'https://scontent.fccs5-1.fna.fbcdn.net/v/t51.2885-15/160749207_1118035928708171_7198024186681508085_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=86c713&_nc_ohc=gAUSSR9kURMAX-Ebt47&_nc_ht=scontent.fccs5-1.fna&oh=8c05a3732e9c81925abb3eac0f8f6abf&oe=609CA294'}
                                userName='instaescuela'
                            />
                        </Col>
                    )
                })}
            </Row>
            {postCount!==posts.length?
            <div className='lazy-load-post-container'>
                <Button onClick={handlePostCount}>
                    Cargar mas posts
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