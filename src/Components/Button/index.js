import React from 'react';
import styled from 'styled-components';
import {Button as ButtonAntd} from 'antd';

const ButtonWrapper = styled.div`

`;

const Button = ({ children, onClick }) => {
    const handleClick = () => {
        onClick();
    }
    return (
        <ButtonWrapper onClick={handleClick}>
            <ButtonAntd>
                { children }
            </ButtonAntd>
        </ButtonWrapper>
    )
}

Button.defaultProps = {
    
}

export default Button;