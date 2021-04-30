import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';

import AccountTabs from './Containers/AccountTabs';
import HorizontalMenu from './Containers/HorizontalMenu';
import Header from './Containers/Header';

import Overview from './Pages/Public/Overview';
import Posts from './Pages/Public/Posts';
import HistoricStats from './Pages/Public/HistoricStats';
import Demographics from './Pages/Public/Demographics';
import Hashtag from './Pages/Public/Hashtag';
import Engagement from './Pages/Public/Engagement';
import Dashboard from './Pages/Public/Dashboard';
import Register from './Pages/Public/Register';
import Login from './Pages/Public/Login';

import axios from 'axios';
import { usersContext } from './Context';
import Utils from './Utils';

const url='https://boiling-coast-31813.herokuapp.com/getProfile';

const MainContainer = styled.div`
    padding: 2em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width:800px){
      padding: 1em;
    }
    @media only screen and (max-width:500px){
      padding: 1em;
    }
`;

function App() {

  const [state, setState] = useState({
    accounts:[],
    userActive:null,
    indexActive:0
  });
  const [location, setLocation] = useState('');

  useEffect(()=>{

    /*axios({
      method: "POST",
      url: url,
      data: {username:"instaescuela"},
      headers: {
          'Content-Type': 'application/json',
      },
    })
    .then(data => {
      if(data && !data.data.error){
        console.log(data.data.business_discovery);
        let aux = state.accounts.slice(0);
        aux.push(data.data.business_discovery);
        let users;
        if(!state.userActive)
          users = {...state, accounts:aux, userActive: aux[0] };
        else
          users = {...state, accounts:aux, userActive: aux[aux.length-1], indexActive:aux.length-1 };
        setState(users);
      }
    })
    .catch((error)=>{
      console.error('error',error)
    });*/
    setLocation(window.location.pathname);
  },[window.location.pathname]);

  const handleChangeUser = (index) => {
    setState({...state, userActive: state.accounts[index], indexActive:index});
  }

  const handleSearch = (data) => {
    let aux = state.accounts.slice(0);
    let userFind = aux.filter(item=>item.username===data.username);
    //console.log('userfind', userFind)
    if(userFind.length>0){
      return;
    }
    aux.push(data);
    let users;
    if(!state.userActive)
      users = {...state, accounts:aux, userActive: aux[0] };
    else
      users = {...state, accounts:aux, userActive: aux[aux.length-1], indexActive:aux.length-1 };
    setState(users);
  }

  const handleRemove = (key) => {
    let aux = state.accounts.slice(0);
    aux.splice(key,1);
    let users;
    if(!state.userActive)
      users = {...state, accounts:aux, userActive: aux[0] };
    else
      if(key>0)
        users = {...state, accounts:aux, userActive: aux[key-1], indexActive:key-1 };
      else
        users = {...state, accounts:aux, userActive: aux[key], indexActive:key };
    setState(users);
    if(users.length===0){

    }
  }

  const handleLocationChange = (event) => {
    //console.log(event);
    setLocation(event.pathname);
  }

  const UpdateLocation = ({ onChange }) => {
    const location = useLocation();
    useEffect(()=>{
      onChange(location);
    },[location])
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }

  return (
    <usersContext.Provider value={state}>
      <div className='App'>
          <Router>
            <Header
              onSearch = { handleSearch }
            />
            <MainContainer>
              {
              (location!=='/register' && location!=='/login')?
              (
                <React.Fragment>
                  {state.userActive?
                    <AccountTabs
                      accounts={state.accounts}
                      onChange={handleChangeUser}
                      activeKey={state.indexActive}
                      removeAccount = {handleRemove}
                    /> 
                    :''}
                    {state.userActive?
                      <HorizontalMenu/>
                    :''}
                  </React.Fragment>
                ):''
              }
              {state.userActive?'':<Redirect to='/'/>}
              <UpdateLocation
                onChange={handleLocationChange}
              />
              <Switch>
                <Route path="/register">
                  <Register/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/" exact>
                  {!state.userActive?
                    <Dashboard
                      onSearch = { handleSearch }
                    />
                  :''}
                  {state.userActive?
                    <React.Fragment>
                      <Overview 
                        stats={state.userActive.stats?state.userActive.stats.data:[]}
                        key={state.userActive.username}
                      />
                      <Engagement
                        averageLikes = {state.userActive.average_likes}
                        averageComment = {state.userActive.average_comments}
                        averageEngagement = {state.userActive.stats?state.userActive.stats.data.slice(0,30).map(item=>Utils.round(item.engagement_rate.count)):[]}
                        postingHabits = {state.userActive.posting_habit_count}
                        engagement = {state.userActive.engagement}
                        followers = {state.userActive.followers_count}
                        key={state.indexActive}
                      />
                    </React.Fragment>
                  :''}
                </Route>
                <Route path="/posts">
                  {state.userActive?
                  <Posts 
                    posts={state.userActive.media.data}
                    avatar={state.userActive.profile_picture_url}
                    key={state.userActive.username}
                  />
                  :''}
                </Route>
                <Route path="/historic">
                  {state.userActive?
                    <HistoricStats
                      stats={state.userActive.stats?state.userActive.stats.data:[]}
                      key={state.userActive.username}
                    />
                  :''}
                </Route>
                <Route path="/demographics">
                  <Demographics/>
                </Route>
                <Route path="/hashtag">
                  {state.userActive?
                    <Hashtag
                      hashtag={state.userActive.hashtag}
                      count={state.userActive.hashtag_count}
                      key={state.indexActive}
                      key={state.userActive.username}
                    />
                  :''
                  }
                </Route>
                <Route path="/engagement">
                  {state.userActive?
                    <Engagement
                      averageLikes = {state.userActive.average_likes}
                      averageComment = {state.userActive.average_comments}
                      averageEngagement = {state.userActive.stats?state.userActive.stats.data.slice(0,30).map(item=>Utils.round(item.engagement_rate.count)):[]}
                      postingHabits = {state.userActive.posting_habit_count}
                      engagement = {state.userActive.engagement}
                      followers = {state.userActive.followers_count}
                      key={state.userActive.username}
                    />
                  :''
                  }
                </Route>
              </Switch>
            </MainContainer>
          </Router>
      </div>
    </usersContext.Provider>
  );
}

export default App;
