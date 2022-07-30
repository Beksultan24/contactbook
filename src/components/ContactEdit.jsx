import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ContactEdit = ({
  editModal,
  handleEditClose,
  editContact,
  handleSave,
}) => {
  const [contact, setContact] = useState(editContact);

  console.log(contact);

  const editName = (e) => {
    let newObj = {
      ...contact,
      name: e.target.value,
    };
    setContact(newObj);
  };

  const editPhone = (e) => {
    let newObj = {
      ...contact,
      phone: e.target.value,
    };
    setContact(newObj);
  };

  const editImage = (e) => {
    let newObj = {
      ...contact,
      image: e.target.value,
    };
    setContact(newObj);
  };

  return (
    <div>
      <Modal show={editModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <Form.Control
              className="mt-2"
              size="lg"
              type="text"
              placeholder="Name"
              value={contact.name}
              onChange={editName}
            />

            <Form.Control
              className="mt-2"
              size="lg"
              type="text"
              placeholder="Phone"
              value={contact.phone}
              onChange={editPhone}
            />

            <Form.Control
              className="mt-2"
              size="lg"
              type="text"
              placeholder="Image"
              value={contact.image}
              onChange={editImage}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(contact)}>
            Save Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactEdit;
