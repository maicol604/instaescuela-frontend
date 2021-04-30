import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Spin } from 'antd';
import { Link, useLocation  } from 'react-router-dom';
import { InstagramOutlined } from '@ant-design/icons';

import Input from '../../Components/Input';
import Avatar from '../../Components/Avatar';
import Button from '../../Components/Button';

import searchService from '../../Services/Search';

const HeaderWrapper = styled.div`

    padding: 2em 4em;
    background: var(--secondary-bg-color);
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .left-box {
        display: flex;
        .search-box {
            margin-left: 1em;
        }
    }
    .right-box {
        display: flex;
    }
`;

const UsersFinded = styled.div`
    background-color: var(--secondary-bg-color);
    display: flex;
    flex-direction: column;
    padding: 1em;
    border-radius: .5em;
    border: 1px solid var(--soft-border-color);
`;

const Header = ({ onSearch }) => {

    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [searching, setSearching] = useState(false);

    const location = useLocation();

    const handleChange = (event) => {
        let { value } = event;
        setSearch(value)
        setSearching(true);
        searchService.searchUser({ username: value },
        (data)=>{
            setSearching(false);
            setUsers(data);
        });
    }

    const handleSearch = () => {
        setSearching(true);
        searchService.searchUser({ username: search },
        (data)=>{
            setSearching(false);
            setUsers(data);
        });
    }   

    const handleClick = () => {
        onSearch(users[0]);
        setUsers([]);
        setSearch('');
    }

    return (
        <HeaderWrapper>
            <div className='left-box'>
                <div>
                    <Link to='/'><InstagramOutlined /></Link>
                </div>
                <div className='search-box'>
                    <Dropdown
                        overlay={
                            <UsersFinded>
                                {   !searching?
                                    users.map((data, index)=>{
                                        console.log(data)
                                        return (
                                            <span style={{cursor:'pointer'}} onClick={handleClick}>
                                                <Avatar
                                                    src={data.profile_picture_url}
                                                    userName={data.username}
                                                    key={index}
                                                />
                                            </span>
                                        )
                                    })
                                    :
                                    <Spin />
                                }
                            </UsersFinded>
                        }
                        visible={users.length>0 || searching}
                    >
                        <span>
                            {
                                (location.pathname!=='/register' && location.pathname!=='/login')?
                                <Input
                                    placeholder='Search accounts'
                                    onChange={handleChange}
                                    onSearch = { handleSearch }
                                    value={search}
                                    search
                                />
                                :''
                            }
                        </span>
                    </Dropdown>
                </div>
            </div>
            <div className='right-box'>
                <div>
                    <Link to='/login'>
                        <Button style={{marginRight:'1em'}}>Sign in</Button>
                    </Link>
                </div>
                <div>
                    <Link to='/register'>
                        <Button primary>Create a Free Account</Button>
                    </Link>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header;
