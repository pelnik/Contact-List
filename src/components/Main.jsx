import React, { useState } from 'react';
import dummyContacts from '../dummyData/index.js';
import ContactList from './ContactList.jsx';

console.log(dummyContacts)

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);

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
