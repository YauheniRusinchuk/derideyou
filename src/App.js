import React, { Component, Fragment } from 'react';
import './App.css';
import fire from './config';
import Login from './components/login';
import Home from './components/home';



class App extends Component {

  state = {user: null, loader: true}

  componentDidMount() {
     this.authListener();
 }

 authListener = () => {
   fire.auth().onAuthStateChanged((user)=>{
     if(user) {
       this.setState({user, loader: false})
     }else {
       this.setState({user: null, loader:false})
     }
   })
 }

  render() {
    let body = this.state.user ? <Home user={this.state.user} /> : <Login />
    let home = this.state.loader ? <p className='preload_loading'> LOADING </p>: body
    return (
      <Fragment>
        {home}
      </Fragment>
    );
  }
}

export default App;
