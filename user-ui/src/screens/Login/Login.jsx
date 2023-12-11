import { useState } from 'react';
import axios from 'axios';
import './login.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Navigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [userLogin, setUserLogin] = useState('')
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleGoogleSignup = () => {
    try {
      window.location.href = '/auth/google'; // Redirect to backend endpoint
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };
    const responseGoogle = (response) => {
      console.log(response); // Handle the Google response
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post('/api/admins/login', formData); // Assuming '/api/loginAdmin' is the correct endpoint
      console.log('Login response:', response.data);
      setUserLogin(response.data)
      // Handle login success, e.g., set user session or redirect to dashboard
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle login failure, show an error message, etc.
    }
  };

  if (userLogin) {
    return <Navigate to="/dashboard/admin" state={{ userLogin }}/>;
  }

  return (
    <div>
      <Header />
      <div className='container'>
   <div className='innercontainer'>
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
          <p className='form-text' style={{color: 'white'}}>
            Sign In with Google <a href='/'>Sign In</a>
          </p>
        

          <GoogleLogin
        clientId="43066752112-1glskrcn1afnckhgo5dg7euae2meinkh.apps.googleusercontent.com"
        buttonText="Login with Google"
        hostedDomain="http://localhost:3001/"
        redirectUri="http://localhost:5000/auth/google/callback"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
        </form>
      </div>
      </div>
      <Footer />
    </div>
  );
}