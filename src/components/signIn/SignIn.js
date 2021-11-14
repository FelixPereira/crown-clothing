import React from 'react';

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
          <input
            type='email'
            name='email'
            value={this.state.email}
            required
            onChange={this.handleChange} />
          <label>Email</label>

          <input 
            type='password'
            name='password'
            value={this.state.password}
            required
            onChange={this.handleChange} />
          <label>Password</label>

          <input type='submit' value='Sign in' />
        </form>
      </div>
    )
  }
}

export default SignIn;