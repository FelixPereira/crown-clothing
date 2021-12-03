import React from 'react';

import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';


class App extends React.Component {
  constructor() {
    super();

  }

  render(){
    return(
      <div>
        <h1>I don't have a account</h1>
        <span></span>

        <form>
          <FormInput 
            type='text'
            name='Username'
            value=''
            label='Username'
            required
          />

          <FormInput 
            type='email'
            name='emIL'
            value=''
            label='email'
            required
          />

          <FormInput 
            type='password'
            name='password'
            value=''
            label='Password'
            required
          />

          <FormInput 
            type='password'
            name='password'
            value=''
            label='Confirm password'
            required
          />
        </form>
        
      </div>
    )
  }
}

export default App;