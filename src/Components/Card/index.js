import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    padding: 0em;
    border-radius: .5em;
    box-shadow: 10px -10px 150px rgba(0, 0, 0, 0.1);
    background-color: var(--secondary-bg-color);
    width: 100%;
    box-sizing: border-box;
    .title {
        padding: 1em;
        border-bottom: 1px solid var(--soft-border-color);
        font-weight: 600;
    }
    .content {
        padding: 1em;
    }
`;

const Card = ({ children, title }) => {
    return (
        <CardWrapper>
            {title?
                <div className='title'>{title}</div>
            :''}
            <div className='content'>{ children }</div>
        </CardWrapper>
    )
}

Card.defaultProps = {
    title:null,
}

export default Card;