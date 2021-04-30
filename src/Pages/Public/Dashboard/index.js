import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

import Input from '../../../Components/Input';
import searchService from '../../../Services/Search';
import Avatar from '../../../Components/Avatar';
import { Dropdown, Spin } from 'antd';

const DashboardWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    padding: 2em 5em;
    box-sizing: border-box;
    .title {
        font-size: 4.5em;
        color: var(--main-color);
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

const Dashboard = ({ onSearch }) => {

    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [searching, setSearching] = useState(false);


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
        <DashboardWrapper>
            <span className='title'>
                Get in-depth insights on any Instagram
            </span>
            
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
                    style={{
                        width:'100%',
                        fontSize: '2em',
                        marginTop: '1em'
                    }}
                    placeholder='Enter any instagram'
                    onChange={handleChange}
                    onSearch = { handleSearch }
                    value={search}
                    search
                />
            </Dropdown>
        </DashboardWrapper>
    )
}

export default Dashboard;