import React from 'react';
import styled from 'styled-components';
import {SearchOutlined} from '@ant-design/icons';

const InputWrapper = styled.input`
    padding: .5em 2.5em .5em 1.5em;
    background-color: var(--hastag-bg-color);
    border: 1px solid var(--soft-border-color);
    border-radius: .5em;
    width: 100%;
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

const Input = ({placeholder, onChange, onSearch, value, style, search, name}) => {

    const hanldeChange = (e) => {
        let value = e.target.value;
        onChange({ value, name });
    }

    return (
        <InputContainer style={style}>
            <InputWrapper placeholder={placeholder} onChange={hanldeChange} value={value}/>
            {search?<span className='icon-container' onClick={onSearch}><SearchOutlined /></span>:''}
        </InputContainer>
    )
}

Input.defaultProps = {
    placeholder: '',
    value:'',
    name:'',
}

export default Input;