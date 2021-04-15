import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import AccountTabs from './Containers/AccountTabs';
import HorizontalMenu from './Containers/HorizontalMenu';
import Posts from './Pages/Public/Posts';

import axios from 'axios';
import utils from './Utils';

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
      //console.log(data)
      if(data && !data.data.profile.error){
        console.log(data.data.profile.business_discovery);
        let aux = state.accounts;
        let posts = data.data.profile.business_discovery.media.data;
        aux.push(data.data.profile.business_discovery);
        setState({...state, accounts:aux, posts: posts})
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
