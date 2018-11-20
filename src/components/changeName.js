import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';


class ChangeUsername extends React.Component {

  state = {username: 'GUEST', redirect: false}

  componentDidMount() {
    let {displayName} = this.props.username;
    let name = displayName ? displayName :'GUEST'
    this.setState({username: name})
  }
  onchange = (e) => {this.setState({[e.target.name]: e.target.value})}

  onclick = (e) => {
    e.preventDefault();
    this.props.username.updateProfile({
      displayName: this.state.username,
    }).then(()=>{
      this.setState({redirect: true})
    })
  }

  render() {
    return(
      <Fragment>
        <div className='changename'>
        <h3> your nickname in the chat </h3>
        <input className='changetext' type='text' value={this.state.username}
                name='username' onChange={this.onchange} />
        <Link  className='btn_change' onClick={this.onclick} to="/chat"> go chat </Link>
        {this.state.redirect && <Redirect to="/chat" />}
        </div>
        <p className='you_can'> you can change it at any time </p>
      </Fragment>
    );
  }
}

ChangeUsername.propType = {
  username: PropTypes.object
}


export default ChangeUsername;
