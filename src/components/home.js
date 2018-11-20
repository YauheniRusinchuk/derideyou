import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import fire from '../config';
import Logout from './logout';
import Main from './main';

class Home extends React.Component {
  logout = () => {fire.auth().signOut();}

  render() {
    return (
        <Fragment>
          <div className='home'>
          <Main     user={this.props.user}/>
          <Logout   logout={this.logout} />
          </div>
        </Fragment>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object,
}


export default Home;
