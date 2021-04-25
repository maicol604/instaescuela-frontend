import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../../Components/Input';
import axios from 'axios';

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

const Header = ({ onSearch }) => {

    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        //const url='https://www.instagram.com/web/search/topsearch/?context=blended&query=${instaescuela}';
        //console.log(event.value);
        let { value } = event;
        setSearch(value);
        /*axios({
            method: "POST",
            url: url,
            data: { query: value },
        })
        .then(data => {
        console.log(data)
        })
        .catch((error)=>{
        console.error(error);
        });*/
    }

    const handleSearch = () => {
        const url='https://boiling-coast-31813.herokuapp.com/getProfile';
        //console.log(event.value);
        axios({
            method: "POST",
            url: url,
            data: { username: search },
        })
        .then(data => {
            onSearch(data);
        })
        .catch((error)=>{
        console.error(error);
        });
    }

    return (
        <HeaderWrapper>
            <div className='left-box'>
                <div>
                    Logo
                </div>
                <div className='search-box'>
                    <Input
                        placeholder='Search accounts'
                        onChange={handleChange}
                        onSearch = { handleSearch }
                    />
                </div>
            </div>
            <div className='right-box'>
                menu
                <div>
                    Avatar
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header;
