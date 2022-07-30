import AddContact from "./AddContact";
import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ContactEdit from "./components/ContactEdit";

function App() {
  let [contacts, setContacts] = useState([]);
  let [contactEdit, setContactEdit] = useState({});

  let [editModal, setEditModal] = useState(false);
  let handleEditClose = () => setEditModal(false);
  let handleEditShow = () => setEditModal(true);

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);
    setContacts(newContactsArray);
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  const [editContact, setEditContact] = useState({});
  console.log(editContact);

  const handleEditIndex = (id) => {
    let obj = contacts.filter((item) => item.id === id);
    handleEditShow();
    setEditContact(obj[0]);
  };

  const handleSave = (obj) => {
    let newContact = contacts.map((item) => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });

    setContacts(newContact);
    handleEditClose();
  };

  return (
    <>
      <AddContact handleNewContact={handleNewContact} />
      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
      {editModal && (
        <ContactEdit
          editModal={editModal}
          contactEdit={contactEdit}
          handleEditClose={handleEditClose}
          editContact={editContact}
          handleSave={handleSave}
        />
      )}
    </>
  );
}

export default App;
