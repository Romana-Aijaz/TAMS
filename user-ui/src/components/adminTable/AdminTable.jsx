import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './adminTable.css'; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

const AdminTable = (props) => {
    const [admins, setAdmins] = useState([]);
    const [adminId, setAdminId] = useState('')
    const [showModal, setShowModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
    const [updatedAdmin, setUpdatedAdmin] =useState('')
    const [deletedAdmin, setDeletedAdmin] =useState('')
    console.log(props)
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('/api/admins/admin'); 
        setAdmins(response.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    fetchAdmins();
  }, [updatedAdmin, deletedAdmin]);
  const handleUpdate = async (id) => {
    setShowModal(true)
    setAdminId(id)
  };

  const handleDelete = async (id) => {
    setShowDelModal(true)
    setAdminId(id)
  };
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  const updatedDetails = {};
 console.log(adminId)
  formData.forEach((value, key) => {
    updatedDetails[key] = value;
  });
  updatedDetails.adminId = adminId;
  console.log('Updated Details:', updatedDetails);

  const response = await axios.patch('/api/admins/admin/'+adminId, updatedDetails);
  console.log(response.data)
  setUpdatedAdmin(response.data)
  setShowModal(false);
  };
  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };
  const handleCloseDelModal = () => {
    setShowDelModal(false); // Close the modal
  };
  const handleDelModalSubmit = async () => {
    const response = await axios.delete('/api/admins/admin/'+adminId);
    console.log(response.data)
    setShowDelModal(false)
    setDeletedAdmin(response.data)
  };
  return (
    
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
            {/* Add more table headers based on your admin schema */}
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) => (
            <tr key={index}>
              <td>{admin.username}</td>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>
                <button onClick={() =>handleUpdate(admin._id)}>Update</button>
                <button onClick={() => handleDelete(admin._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={handleCloseModal} style={{marginTop: '200px'}}>
  <Modal.Header closeButton>
    <Modal.Title className="text-white">Update Admin Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form onSubmit={handleModalSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="name" className="text-white">Name:</label>
      <input type="text" id="name" name="name" className="form-control mb-3" />

      <label htmlFor="email" className="text-white">Email:</label>
      <input type="email" id="email" name="email" className="form-control mb-3" />

      <label htmlFor="username" className="text-white">Username:</label>
      <input type="text" id="username" name="username" className="form-control mb-3" />

      <button type="submit" className="btn btn-primary mt-3">Update</button>
    </form>
  </Modal.Body>
</Modal>
<Modal show={showDelModal} onHide={handleCloseDelModal} style={{marginTop: '200px'}}>
  <Modal.Header closeButton>
    <Modal.Title className="text-white">Are you sure you want to delete this Admin?</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <button className="btn btn-primary mt-3" onClick={()=>handleCloseDelModal()}>Cancel</button>
      <button className="btn btn-primary mt-3" onClick={()=>handleDelModalSubmit()}>Delete</button>
  </Modal.Body>
</Modal>
    </div>
  );
};

export default AdminTable;