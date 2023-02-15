import React, { useState } from 'react';
import ContactList from './ContactList.jsx';
import SingleContact from './SingleContact.jsx';



const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});

  async function getContacts() {
    try {
      const users = await fetch('http://jsonplace-univclone.herokuapp.com/users');
      const usersJSON = await users.json();
      console.log(usersJSON)

      setContacts(usersJSON);
    } catch (err) {
      console.err(err);
    }
  }

  async function selectContact(contactId) {
    const response = await fetch(`http://jsonplace-univclone.herokuapp.com/users/${contactId}`);
    const user = await response.json();

    setSelectedContact(user);
  }

  if (contacts.length === 0) {
    getContacts();
  }

  function clearSelectedContact() {
    console.log('entered clear')
    setSelectedContact({})
  }

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container"> {
        selectedContact.id !== undefined ?
        <SingleContact
          selectedContact={selectedContact}
          handleClick={clearSelectedContact}/> :
        <ContactList
          contacts={contacts}
          selectContact={selectContact}
        />
        }
      </div>
    </div>
  );
};

export default Main;
