import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

const TeacherTable = () => {
  const [teachers, setTeachers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [teacherId, setTeacherId] = useState('');
  const [updatedTeacher, setUpdatedTeacher] = useState('');
  const [deletedTeacher, setDeletedTeacher] = useState('');

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('/api/teachers/teacher');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, [updatedTeacher, deletedTeacher]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseDelModal = () => {
    setShowDelModal(false);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedDetails = {};

    formData.forEach((value, key) => {
      updatedDetails[key] = value;
    });

    updatedDetails.teacherId = teacherId;

    const response = await axios.patch('/api/teachers/teacher/' + teacherId, updatedDetails);
    setUpdatedTeacher(response.data);
    setShowModal(false);
  };

  const handleUpdate = async (id) => {
    setShowModal(true);
    setTeacherId(id);
  };

  const handleDelete = async (id) => {
    setShowDelModal(true);
    setTeacherId(id);
  };

  const handleDelModalSubmit = async () => {
    const response = await axios.delete('/api/teachers/teacher/' + teacherId);
    setDeletedTeacher(response.data);
    setShowDelModal(false);
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.username}</td>
              <td>{teacher.email}</td>
              <td>
                <button onClick={() => handleUpdate(teacher._id)}>Update</button>
                <button onClick={() => handleDelete(teacher._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={handleCloseModal} style={{ marginTop: '200px' }}>
        {/* Update Modal Content */}
      </Modal>
      <Modal show={showDelModal} onHide={handleCloseDelModal} style={{ marginTop: '200px' }}>
        <Modal.Header closeButton>
          <Modal.Title className="text-white">Are you sure you want to delete this teacher?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button className="btn btn-primary mt-3" onClick={handleCloseDelModal}>
            Cancel
          </button>
          <button className="btn btn-danger mt-3" onClick={handleDelModalSubmit}>
            Delete
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TeacherTable;