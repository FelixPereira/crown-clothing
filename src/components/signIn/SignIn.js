import React, { useState } from 'react';

import FormInput from '../formInput/FormInput';
import './signIn.css';
import CustomButton from '../customButton/CustomButton';
import {auth, signInWithGoogle} from '../../firebase/firebase';

const SignIn = () => {
  const [ userCredentials, setUserCredentials ] = useState({
    email: '', 
    password: ''
  });

  const {email, password} = userCredentials;
  
  const handleSubmit = async event => {
    event.preventDefault(); 
    try{
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({email: '', password: ''});
    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = event => {
    const {name, value} = event.target;

    setUserCredentials({...userCredentials, [name]: value });
  }

  return(
    <div className='sign-in'>
      <h1 >I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          required
          label='Email'
          handleChange={handleChange} />

        <FormInput 
          type='password'
          name='password'
          value={password}
          required
          label='Password'
          handleChange={handleChange} />

        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} signInWithGoogle> Sign in with Google </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;