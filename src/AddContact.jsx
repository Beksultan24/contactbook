import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function AddContact(props) {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [image, setImage] = useState("");

  function handleClick() {
    if (!name.trim() || !phone.trim() || !image.trim()) {
      alert("Write in the  field!");
      return;
    }

    let newContact = {
      name,
      phone,
      image,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setPhone("");
    setImage("");
  }

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="icon">
          iContact!
        </Navbar.Brand>

        <div className="d-flex justify-content-between">
          <Form className="d-flex mx-2">
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="search"
              placeholder="Name"
              className=" mt-2 "
              aria-label="Search"
            />
          </Form>

          <Form className="d-flex mx-2">
            <Form.Control
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="search"
              placeholder="Phone"
              className=" mt-2"
              aria-label="Search"
            />
          </Form>

          <Form className="d-flex mx-2">
            <Form.Control
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="search"
              placeholder="Image"
              className=" mt-2"
              aria-label="Search"
            />
          </Form>
          <Button
            variant="outline-light"
            className="mt-2"
            onClick={handleClick}
          >
            New Contact
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default AddContact;
