import React from 'react';

import FormInput from '../formInput/FormInput';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }


  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({ [name]: value });

  }

  render() {
    return(
      <div>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            required
            email='Email'
            handleChange={this.handleChange} />

          <FormInput 
            type='password'
            name='password'
            value={this.state.password}
            required
            label='Password'
            handleChange={this.handleChange} />

          <input type='submit' value='Sign in' />
        </form>
      </div>
    )
  }
}

export default SignIn;