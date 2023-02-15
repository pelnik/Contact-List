import React, { useState } from 'react';
import ContactList from './ContactList.jsx';



const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});

  async function getContacts() {
    try {
      const users = await fetch('http://jsonplace-univclone.herokuapp.com/users');
      const usersJSON = await users.json();

      setContacts(usersJSON);
    } catch (err) {
      console.err(err);
    }
  }

  if (contacts.length === 0) {
    getContacts();
  }

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
};

export default Main;
