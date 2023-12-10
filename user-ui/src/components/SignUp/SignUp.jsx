import { useState } from 'react';
import axios from 'axios';
import './signUp.css';
import { Navigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
 const [signUp, setSignUp] = useState('')
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/admins/admin', formData); // Assuming '/api/admin' is the correct endpoint
      console.log('New admin created:', response.data);
      setSignUp(response.data)
      // Handle success, e.g., show a success message or redirect to another page
    } catch (error) {
      console.error('Error creating admin:', error.response.data);
      // Handle error, show an error message, etc.
    }
  };
 if (signUp) {
 return <Navigate to='/login' />
 }
  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className='formGroup'>
          <label htmlFor='username'>Username:</label>
          <input type='text' id='username' name='username' required onChange={handleChange} />
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required onChange={handleChange} />
        </div>
        <div className='formGroup'>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' required onChange={handleChange} />
        </div>
        <button type='submit'>Sign Up</button>
        <p className='form-text'>
          <div style={{color: 'white'}}> Already have an account?</div> <a href='/login'>Login</a>
        </p>
      </form>
    </div>
  );
}