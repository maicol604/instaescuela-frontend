import React from 'react';
import styled from 'styled-components';

import Card from '../../../Components/Card';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { Spin } from 'antd';

const RegisterWrapper = styled.div`
    width: 40%;
    text-align: center;
`;

const inputStyle={
    fontSize: '1em',
    marginBottom: '1em',
}

const spanStyle = {width:'100%', display:'flex', justifyContent: 'center', padding: '1em', boxSizing:'border-box'};

const Register = () => {
    const [state, setState] = useState({
        name:'',
        email:'',
        password:'',
        confirm_password:'',
    });

    const [fetching, setFetching] = useState(false);

    const handleChange = ({ name, value}) => {
        setState({...state, [name]: value})
    }

    return (
        <RegisterWrapper>
            <Card>
                <h2 style={{padding: '1em 0'}}>Create your account </h2>
                <Input
                    placeholder='Name'
                    name='name'
                    style={inputStyle}
                    onChange={handleChange}
                    value={state.name}
                />
                <Input
                    placeholder='Email address'
                    name='email'
                    style={inputStyle}
                    onChange={handleChange}
                    value={state.email}
                />
                <Input
                    placeholder='Password'
                    name='password'
                    style={inputStyle}
                    onChange={handleChange}
                    value={state.password}
                />
                <Input
                    placeholder='Confirm password'
                    name='confirm_password'
                    style={inputStyle}
                    onChange={handleChange}
                    value={state.confirm_password}
                />
                <Button
                    style={{
                        width:'100%',
                        fontSize: '1.25em',
                    }}
                    primary
                    disabled = {fetching}
                >
                    Create account 
                </Button>
                {
                    fetching?
                        <span style={{...spanStyle}}>
                            <Spin/>
                        </span>
                    :''
                }
                <span style={{...spanStyle, paddingTop:'0'}}>ó</span>
                <Link to='login'>
                    <Button
                        style={{
                            width:'100%',
                            fontSize: '1.25em',
                        }}
                        disabled = {fetching}
                    >
                        Sign in 
                    </Button>
                </Link>
            </Card>
        </RegisterWrapper>
    )
}

export default Register;