import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const options = [
    {
        title:'Overview',
        url:'/'
    },
    {
        title:'Demographics',
        url:'/demographics'
    },
    {
        title:'Engagement',
        url:'/engagement'
    },
    {
        title:'Mentions',
        url:'/mentions'
    },
    {
        title:'Historic Stats',
        url:'/historic'
    },
    {
        title:'Posts',
        url:'/posts'
    },
]

const HorizontalMenuWrapper = styled.div`
    padding: 0 1em;
    background-color: var(--secondary-bg-color);
    border-radius: .5em;
    margin-bottom: 1em;
    display: flex;
    .menu-item {
        font-weight: 600;
        width: max-content;
        padding: 1em 1em;
        margin: 0 .5em;
        display: block ruby;
        color: var(--main-text-color);
    }
    .menu-item-active {
        border-bottom: 2px solid var(--main-color);
    }

`;

const HorizontalMenu = () => {
    return (
        <HorizontalMenuWrapper>
            {options.map((option,index)=>
                <NavLink key={index} to={option.url} activeClassName='menu-item-active' exact>
                    <div className={'pointer menu-item'}>
                        {option.title}
                    </div>
                </NavLink>
            )}
        </HorizontalMenuWrapper>
    )
}

export default HorizontalMenu;