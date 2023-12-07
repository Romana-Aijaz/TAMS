import { useState } from 'react';
import axios from 'axios';
import './signUp.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/admin', formData); // Assuming '/api/admin' is the correct endpoint
      console.log('New admin created:', response.data);
      // Handle success, e.g., show a success message or redirect to another page
    } catch (error) {
      console.error('Error creating admin:', error.response.data);
      // Handle error, show an error message, etc.
    }
  };

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
          Already have an account? <a href='/login'>Login</a>
        </p>
      </form>
    </div>
  );
}