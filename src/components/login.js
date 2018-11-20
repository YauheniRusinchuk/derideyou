import React, {Fragment} from 'react';
import fire from '../config';

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }


  onHandleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  signin = (e) => {
    e.preventDefault();
    const {email,password} = this.state;
    fire.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{this.setState({email:'',password:''})})
        .catch((err)=>{console.log(err.message)})
  }

  login = (e) => {
    e.preventDefault();
    const {email,password} = this.state;
    fire.auth().signInWithEmailAndPassword(email,password)
        .then(() => {this.setState({email: '', password: ''})})
        .catch((err) => {console.log(err.message)})
}

  render() {
    return (
      <Fragment>
      <div className='background_img_login'>
      <div className='login_container'>
        <h3>Log in or register chat</h3>
        <div className='login'>
          <label> EMAIL </label><br />
            <input type='email' placeholder='Email ...'
              className='input_type'
              onChange={this.onHandleChange} name='email' value={this.state.email} /> <br />
          <label> PASSWORD </label><br />
            <input type='password' placeholder='Password ...'
              className='input_type'
              onChange={this.onHandleChange} name='password'  value={this.state.password} />
        </div>
        <div className='btn_login'>
            <button onClick={this.login} className='login_btn'>LOG IN</button>
            <button onClick={this.signin} className='login_btn'>REGISTRATION</button>
        </div>
      </div>

      </div>
      </Fragment>
    );
  }
}

export default Login;
