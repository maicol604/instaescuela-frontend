import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'antd';

import Post from '../../../Components/Post';

const PostsWrapper = styled.div`

`;

const Posts = ({posts}) => {
    return (
        <PostsWrapper>
            <Row
                gutter={[10, 10]}
            >
                {posts.map((data,index)=>{
                    return (
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} key={index}>
                            <Post
                                data={data}
                            />
                        </Col>
                    )
                })}
            </Row>
        </PostsWrapper>
    )
}

Posts.defaultProps = {
    posts: [],
}

export default Posts;