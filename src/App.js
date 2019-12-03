import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component'; 

import Header   from './components/header/header.component';

/* const HatsPage = (props)=> {
  console.log(props);
  return(<div>
               <Link to="/hats/topicslist">Topics list</Link>
               <button onClick={()=> props.history.push("/hats/topicslist")}>Topics list</button>
               <h1> hats page</h1>
  </div>);
};

const TopicsList = (props)=> {
  console.log(props);
  // routing dynamically with match  url props
  return(<div>
               <h1> TopicsList page</h1>
               <Link to = { `${props.match.url}/13`}> to 13</Link>
               <Link to = { `${props.match.url}/14`}> to 14</Link>
               <Link to = { `${props.match.url}/15`}> to 15</Link>
          </div>);
};

const TopicDetail = (props)=> {
  console.log(props);
  return(<div>
<h1> TopicDetail page : { props.match.params.topicId}</h1>
  </div>);
};

 

function App() {
  return <div>
        <Switch>
          
          <Route exact path="/" component={HomePage}/> 
          <Route exact path="/hats" component={HatsPage}/> 
          <Route exact path="/hats/topicslist" component={TopicsList}/> 
          <Route       path="/hats/topicslist/:topicId" component={TopicDetail}/> 
        </Switch>
        </div>;
        // Route exact to get the exact path not relative one
        // Switch to route for the only this one of two routes
}
*/

function App() {
  return <div>

         <Header/>
        <Switch>
          
          <Route exact path="/" component={HomePage}/> 
          <Route exact path="/shop" component={ShopPage}/> 
          
        </Switch>
        </div>;
        // Route exact to get the exact path not relative one
        // Switch to route for the only this one of two routes
}
export default App;
