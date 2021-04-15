import React from 'react';
import styled from 'styled-components';
import ig from '../../Assets/Img/instagram.svg';

const AvatarWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    .avatar-image {
        width: 3em;
        height: 3em;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
    }
    .ig-logo {
        width: 1em;
        height: 1em;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        position: absolute;
        left: 2.5em;
        bottom: 0;
    }
    .user-name {
        font-weight: 600;
        margin-left: 1em;
        font-size: 1em;
    }
`;

const Avatar = ({src, userName}) => {
    return (
        <AvatarWrapper>
            <div className='avatar-image'>
                <img src={src} alt='' />
            </div>
            <div className='ig-logo'>
                <img src={ig} alt='' />
            </div>
            <div className='user-name'>{userName}</div>
        </AvatarWrapper>
    )
}

export default Avatar;