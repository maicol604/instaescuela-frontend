import React from 'react';
import styled from 'styled-components';

import Card from '../../../Components/Card';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
    width: 40%;
    text-align: center;
    transition: all .5s;
    @media only screen and (max-width:800px){
        width: 80%;
    }
    @media only screen and (max-width:500px){
        width: 100%;
    }
`;

const inputStyle={
    fontSize: '1em',
    marginBottom: '1em',
}

const Login = () => {
    return (
        <LoginWrapper>
            <Card>
                <h2 style={{padding: '1em 0'}}>Log in to your account </h2>
                <Input
                    placeholder='Email address'
                    style={inputStyle}
                />
                <Input
                    placeholder='Password'
                    style={inputStyle}
                />
                <Button
                    style={{
                        width:'100%',
                        fontSize: '1.25em',
                    }}
                    primary
                >
                    Sign in
                </Button>
                <span>o</span>
                <Link to='register'>
                    <Button
                        style={{
                            width:'100%',
                            fontSize: '1.25em',
                        }}
                    >
                        Sign up 
                    </Button>
                </Link>
            </Card>
        </LoginWrapper>
    )
}

export default Login;