import React from 'react'
import './adminForm.css'
import { useState } from 'react';
import axios from 'axios';
import AdminTable from '../adminTable/AdminTable';

function AdminForm() {
    const initialFormData = {
        username: '',
        email: '',
        password: '',
        name: ''
      };
    
      const [formData, setFormData] = useState(initialFormData);
      const [viewAdmins, setViewAdmins] = useState(false)
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        // Here you can perform actions like sending the form data to your backend or handling it as needed
        console.log('Form submitted with data:', formData);
        try {
            const response = await axios.post('/api/admin', formData); // Assuming '/api/admin' is the correct endpoint
            console.log('New admin created:', response.data);
            if (response.data) {
                alert('Admin added successfully!')
            }
            // Handle success, e.g., show a success message or redirect to another page
          } catch (error) {
            console.error('Error creating admin:', error.response.data);
            // Handle error, show an error message, etc.
          }
        // Reset form after submission
        setFormData(initialFormData);
      };
    
  return (
    <div className='form-container' style={{width: '80%'}}>
        {!viewAdmins ? (
            <div>
        <h2>Add Admin</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
     
      <button type='submit'>Add Admin</button>
      <button onClick={()=>setViewAdmins(true)}>click here to view admins</button>
    </form></div>) : (<AdminTable admin={true}/>)}
  </div>
  )
}

export default AdminForm