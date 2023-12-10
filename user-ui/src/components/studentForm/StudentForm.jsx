import React, { useState } from 'react';
import './studentForm.css'; // You can create a studentForm.css for styling
import axios from 'axios';
import StudentTable from '../studentTable/StudentTable'; // Import the StudentTable component

function StudentForm() {
  const initialFormData = {
    name: '',
    email: '',
    grade: '',
    username: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [viewStudents, setViewStudents] = useState(false);

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
      const response = await axios.post('/api/students/student', formData); // Assuming '/api/students' is the correct endpoint
      console.log('New student created:', response.data);
      if (response.data) {
        alert('Student added successfully!')
      }
    } catch (error) {
      console.error('Error creating student:', error.response.data);
    }
    setFormData(initialFormData);
  };

  return (
    <div className='form-container' style={{width: '80%'}}>
      {!viewStudents ? (
        <div>
          <h2>Add Student</h2>
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
              <label htmlFor='grade'>Grade:</label>
              <input
                type='text'
                id='grade'
                name='grade'
                value={formData.grade}
                onChange={handleChange}
                required
              />
            </div>
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
            <button type='submit'>Add Student</button>
            <button onClick={() => setViewStudents(true)}>Click here to view students</button>
          </form>
        </div>
      ) : (
        <StudentTable />
      )}
    </div>
  );
}

export default StudentForm;