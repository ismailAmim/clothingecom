import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 
import Header   from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";
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

class  App extends React.Component {
 
  /* 
  we don't neeed state initialization it replaced by setCurrentUser object value 
  constructor () {
    super();

    this.state ={
      currentUser : null
    }
  }
 */
  unsubscribeFromAuth = null;
  componentDidMount (){
    const {setCurrentUser}=this.props;

    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=> {
      

      if (userAuth) {
       const userRef= await createUserProfileDocument(userAuth);
      

       userRef.onSnapshot(snapShot =>
        {
          /* this.setState ({
            currentUser :{
              id: snapShot.id,
              ...snapShot.data()
            }}/* ,
            ()=>{
                  console.log(this.state)
                } 
          ); */
        setCurrentUser({
            id : snapShot.id,
            ...snapShot.data()
          });
        });
        
      }
      setCurrentUser(userAuth);
      //this.setState({currentUser : userAuth});
      //this.setState({currentUser:user});
   // console.log(user);
    });
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }

 render() {
 return (<div>
        <Header /*currentUser={this.state.currentUser} // replaced  by redux state*//>
        <Switch>
          <Route exact path="/" component={HomePage}/> 
          <Route exact path="/shop" component={ShopPage}/> 
          <Route exact path="/signin" /*component={SignInAndSignUpPage}*/ 
           render={()=>this.currentUser ? (<Redirect to ='/'/>) :<SignInAndSignUpPage/>}/> 
          </Switch>
        </div>);
        // Route exact to get the exact path not relative one
        // Switch to route for the only this one of two routes
        // Redirect to home if the user was signed in
      }
}

const mapStateToProps =({user})=> ({
  currentUser: user.currentUser
});
const mapDispatchToProps =dispatch=>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
});

export default connect (mapStateToProps,mapDispatchToProps)(App);
