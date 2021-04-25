import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AccountTabs from './Containers/AccountTabs';
import HorizontalMenu from './Containers/HorizontalMenu';
import Header from './Containers/Header';

import Overview from './Pages/Public/Overview';
import Posts from './Pages/Public/Posts';
import HistoricStats from './Pages/Public/HistoricStats';
import Demographics from './Pages/Public/Demographics';
import Hashtag from './Pages/Public/Hashtag';
import Engagement from './Pages/Public/Engagement';

import axios from 'axios';
import { usersContext } from './Context';

const url='https://boiling-coast-31813.herokuapp.com/getProfile';

function App() {

  const [state, setState] = useState({
    accounts:[],
    userActive:null,
    indexActive:0
  })

  useEffect(()=>{

    axios({
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
    });
    
  },[]);

  const handleChangeUser = (index) => {
    setState({...state, userActive: state.accounts[index], indexActive:index});
  }

  return (
    <usersContext.Provider value={state}>
      <div className='App'>
        <Header/>
        <div style={{padding: '2em 4em'}}>
          <Router>
            <AccountTabs
              accounts={state.accounts}
              onChange={handleChangeUser}
              activeKey={state.indexActive}
            /> 
            <HorizontalMenu/>
            <Switch>
              <Route path="/" exact>
                {state.userActive?
                <React.Fragment>
                  <Overview 
                    
                  />
                  <Engagement
                    averageLikes = {state.userActive.average_likes}
                    averageComment = {state.userActive.average_comments}
                    averageEngagement = {[]}
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
                  posts={state.userActive.posts}
                />
                :''}
              </Route>
              <Route path="/historic">
                <HistoricStats
                  stats={state.stats}
                />
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
                />
                :''
                }
              </Route>
              <Route path="/engagement">
                {state.userActive?
                <Engagement
                  averageLikes = {state.userActive.average_likes}
                  averageComment = {state.userActive.average_comments}
                  averageEngagement = {[]}
                  postingHabits = {state.userActive.posting_habit_count}
                  engagement = {state.userActive.engagement}
                  followers = {state.userActive.followers_count}
                  key={state.indexActive}
                />
                :'cargando'
                }
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </usersContext.Provider>
  );
}

export default App;
