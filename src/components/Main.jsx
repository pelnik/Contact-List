import React, { useState } from 'react';
import dummyContacts from '../dummyData/index.js';

console.log(dummyContacts)

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
            {
              contacts.map((contact, idx) => {
                return (
                <tr key={`contact table row: ${idx}`}>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
