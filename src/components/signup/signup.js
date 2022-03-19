import React, { useState } from 'react';

import './signup.css';

import { auth, createDocument } from '../../firebase/firebase';

import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';


const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password:'',
    confirmPassword: ''
  });

  const {displayName, email, password, confirmPassword} = userCredentials;
  
  const handleSubmit = async event => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("Password don't match");
      setUserCredentials({
        ...userCredentials,
        password:'',
        confirmPassword: ''
      })
    } else {
      try {
        const user = await auth.createUserWithEmailAndPassword(email, password);
        await createDocument(user, displayName);

        setUserCredentials({
          displayName: '',
          email: '',
          password:'',
          confirmPassword: ''
        })
      } catch(error) {
        console.log(error)
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserCredentials({...userCredentials, [name]: value})
  };
  
  return(
    <div className='sign-up'>
      <h1>I don't have an account</h1>
      <span>Create an account</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          label='Username'
          required
          onChange={handleChange}
        />

        <FormInput 
          type='email'
          name='email'
          value={email}
          label='Email'
          required
          onChange={handleChange}
        />

        <FormInput 
          type='password'
          name='password'
          value={password}
          label='Password'
          required
          onChange={handleChange}
        />

        <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm password'
          required
          onChange={handleChange}
        />

        <CustomButton invert type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp;