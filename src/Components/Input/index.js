import React from 'react';
import styled from 'styled-components';
import {SearchOutlined} from '@ant-design/icons';

const InputWrapper = styled.input`
    padding: .5em 2.5em .5em 1.5em;
    background-color: var(--hastag-bg-color);
    border: 1px solid var(--soft-border-color);
    border-radius: .5em;
    &:focus {
        outline: none;
    }
`;

const InputContainer = styled.div`
    position: relative;
    .icon-container {
        position: absolute;
        right: 1em;
        top: .5em;
        cursor: pointer;
    }
`;

const Input = ({placeholder, onChange, onSearch, value}) => {

    const hanldeChange = (e) => {
        let value = e.target.value;
        onChange({ value });
    }

    return (
        <InputContainer>
            <InputWrapper placeholder={placeholder} onChange={hanldeChange} value={value}/>
            <span className='icon-container' onClick={onSearch}><SearchOutlined /></span>
        </InputContainer>
    )
}

Input.defaultProps = {
    placeholder: '',
    value:''
}

export default Input;