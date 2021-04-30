import React from 'react';
import styled from 'styled-components';
import {Button as ButtonAntd} from 'antd';

const ButtonWrapper = styled.div`

`;

const Button = ({ children, onClick, style, primary, disabled }) => {
    const handleClick = () => {
        if(onClick)
            onClick();
    }
    return (
        <ButtonWrapper onClick={handleClick} style={style}>
            <ButtonAntd 
                style={{width: '100%',}} 
                type={primary?'danger':''} 
                disabled = { disabled }
            >
                { children }
            </ButtonAntd>
        </ButtonWrapper>
    )
}

Button.defaultProps = {
    onClick: ()=>{},
}

export default Button;