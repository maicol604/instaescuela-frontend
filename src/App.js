import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AccountTabs from './Containers/AccountTabs';
import HorizontalMenu from './Containers/HorizontalMenu';

import Posts from './Pages/Public/Posts';
import HistoricStats from './Pages/Public/HistoricStats';
import Demographics from './Pages/Public/Demographics';
import Hashtag from './Pages/Public/Hashtag';

import axios from 'axios';

const url='https://boiling-coast-31813.herokuapp.com/getProfile';

function App() {

  const [state, setState] = useState({
    accounts:[],
    posts:[]
  })

  useEffect(()=>{

    axios({
      method: "POST",
      url: url,
      data: {username:"instaescuela"},
    })
    .then(data => {
      console.log('here', data)
     if(data && !data.data.error){
        console.log(data.data.business_discovery);
        let aux = state.accounts;
        let posts = data.data.business_discovery.media.data;
        let hashtag = data.data.business_discovery.hashtag;
        let hashtag_count = data.data.business_discovery.hashtag_count;
        aux.push(data.data.business_discovery);
        setState({...state, accounts:aux, posts: posts, hashtag, hashtag_count})
        //.log(utils.getHashtagFromPost(data.data.profile.lastPosts))
      }
    })
    .catch((error)=>console.error(error));
    
  },[]);

  return (
    <div className='App'>
      <Router>
        <AccountTabs
          accounts={state.accounts}
        />
        <HorizontalMenu/>
        <Switch>
          <Route path="/posts">
            <Posts 
              posts={state.posts}
            />
          </Route>
          <Route path="/historic">
            <HistoricStats/>
          </Route>
          <Route path="/demographics">
            <Demographics/>
          </Route>
          <Route path="/hashtag">
            <Hashtag
              hashtag={state.hashtag}
              count={state.hashtag_count}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
