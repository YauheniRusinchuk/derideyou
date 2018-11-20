import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import ChangeUsername from './changeName';
import Chat from "./chat";


class Main extends React.Component {

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={()=> <ChangeUsername username={this.props.user} /> }
              />
          <Route path="/chat" component={()=> <Chat user={this.props.user} /> }
              />
        </Switch>
      </Fragment>
    );
  }
}

Main.propTypes = {
  user: PropTypes.object
}


export default Main;
