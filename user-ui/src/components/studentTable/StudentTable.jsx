import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './studentTable.css'
import Modal from 'react-bootstrap/Modal';
const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [updatedStudent, setUpdatedStudent] =useState('')
  const [deletedStudent, setDeletedStudent] =useState('')
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/api/students/student'); // Assuming your API endpoint is '/api/students'
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [updatedStudent, deletedStudent]);
  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };
  const handleCloseDelModal = () => {
    setShowDelModal(false); // Close the modal
  };
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  const updatedDetails = {};
 console.log(studentId)
  formData.forEach((value, key) => {
    updatedDetails[key] = value;
  });
  updatedDetails.studentId = studentId;
  console.log('Updated Details:', updatedDetails);

  const response = await axios.patch('/api/students/student/'+studentId, updatedDetails);
  console.log(response.data)
  setUpdatedStudent(response.data)
  setShowModal(false);
  };

  const handleUpdate = async (id) => {
    setShowModal(true)
    setStudentId(id)
  };

  const handleDelete = async (id) => {
    setShowDelModal(true)
    setStudentId(id)
  };
  const handleDelModalSubmit = async () => {
    const response = await axios.delete('/api/students/student/'+studentId);
    console.log(response.data)
    setShowDelModal(false)
    setDeletedStudent(response.data)
  };
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
            {/* Add more table headers based on your student schema */}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.email}</td>
              <td>{student.username}</td>
              
              <td>
                <button onClick={() =>handleUpdate(student._id)}>Update</button>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
              {/* Render additional table data based on your student schema */}
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={handleCloseModal} style={{marginTop: '200px'}}>
  <Modal.Header closeButton>
    <Modal.Title className="text-white">Update Student Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form onSubmit={handleModalSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="name" className="text-white">Name:</label>
      <input type="text" id="name" name="name" className="form-control mb-3" />

      <label htmlFor="grade" className="text-white">Grade:</label>
      <input type="text" id="grade" name="grade" className="form-control mb-3" />

      <label htmlFor="username" className="text-white">Username:</label>
      <input type="text" id="username" name="username" className="form-control mb-3" />

      <button type="submit" className="btn btn-primary mt-3">Update</button>
    </form>
  </Modal.Body>
</Modal>
<Modal show={showDelModal} onHide={handleCloseDelModal} style={{marginTop: '200px'}}>
  <Modal.Header closeButton>
    <Modal.Title className="text-white">Are you sure you want to delete this student?</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <button className="btn btn-primary mt-3" onClick={()=>handleCloseDelModal()}>Cancel</button>
      <button className="btn btn-primary mt-3" onClick={()=>handleDelModalSubmit()}>Delete</button>
  </Modal.Body>
</Modal>
    </div>
  );
};

export default StudentTable;