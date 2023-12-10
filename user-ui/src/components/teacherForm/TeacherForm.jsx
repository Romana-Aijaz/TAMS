import React, { useState } from 'react';
import axios from 'axios';
import TeacherTable from '../teacherTable/TeacherTable';

function TeacherForm() {
  const initialFormData = {
    name: '',
    email: '',
    grade: '',
    username: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [viewTeachers, setViewTeachers] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    try {
      const response = await axios.post('/api/teachers/teacher', formData); // Assuming '/api/students' is the correct endpoint
      console.log('New student created:', response.data);
      if (response.data) {
        alert('Teacher added successfully!')
      }
    } catch (error) {
      console.error('Error creating student:', error.response.data);
    }
    setFormData(initialFormData);
  };

  return (
    <div className='form-container' style={{width: '80%'}}>
      {!viewTeachers ? (
        <div>
          <h2>Add Teacher</h2>
          <form onSubmit={handleSubmit}>
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
            </div>
            {/* Add more fields for student form as needed */}
            <button type='submit'>Add Teacher</button>
            <button onClick={() => setViewTeachers(true)}>Click here to view teachers</button>
          </form>
        </div>
      ) : (
        <TeacherTable />
      )}
    </div>
  );
}

export default TeacherForm;