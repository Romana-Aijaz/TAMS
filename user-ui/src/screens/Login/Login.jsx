import { useState } from 'react';
import axios from 'axios';
import './login.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.patch('/api/loginAdmin', formData); // Assuming '/api/loginAdmin' is the correct endpoint
      console.log('Login response:', response);

      // Handle login success, e.g., set user session or redirect to dashboard
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle login failure, show an error message, etc.
    }
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className='formGroup'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              name='username'
              required
              onChange={handleChange}
            />
          </div>
          <div className='formGroup'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              required
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Login</button>
          <p className='form-text'>
            Don't have an account? <a href='/'>Sign Up</a>
          </p>
          <p className='form-text'>
            Sign In with Google <a href='/'>Sign In</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}