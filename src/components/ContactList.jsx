import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ContactList = (props) => {
  return (
    <div className="d-flex justify-content-evenly flex-wrap mt-5">
      {props.contacts.map((item, index) => (
        <Card className="mt-5" key={item.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              <strong>number: </strong>

              {item.phone}
            </Card.Text>
            <Button
              className="edit"
              onClick={() => props.handleEditIndex(item.id)}
            >
              Edit
            </Button>
            <Button
              className="delete"
              onClick={() => props.handleDeleteContact(item.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
