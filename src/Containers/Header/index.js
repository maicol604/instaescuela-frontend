import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../../Components/Input';
import axios from 'axios';
import { Dropdown, Spin } from 'antd';
import Avatar from '../../Components/Avatar';

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


    const handleChange = (event) => {
        let { value } = event;
        setSearch(value)
        setSearching(true);
        const url='https://boiling-coast-31813.herokuapp.com/getProfile';
        axios({
            method: "POST",
            url: url,
            data: { username: value },
        })
        .then(data => {
            console.log(data)
            setSearching(false);
            if(data && !data.data.error){
                let aux = [];
                aux.push(data.data.business_discovery);
                console.log(aux)
                setUsers(aux);
            }
        })
        .catch((error)=>{
            console.error(error);
        });
    }

    const handleSearch = () => {
        setSearching(true);
        const url='https://boiling-coast-31813.herokuapp.com/getProfile';
        axios({
            method: "POST",
            url: url,
            data: { username: search },
        })
        .then(data => {
            setSearching(false);
            if(data && !data.data.error){
                let aux = [];
                aux.push(data.data.business_discovery);
                console.log(aux)
                setUsers(aux);
            }
        })
        .catch((error)=>{
            console.error(error);
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
                    Logo
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
                        <Input
                            placeholder='Search accounts'
                            onChange={handleChange}
                            onSearch = { handleSearch }
                            value={search}
                        />
                    </Dropdown>
                </div>
            </div>
            <div className='right-box'>
                menu
                <div>
                        
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header;
