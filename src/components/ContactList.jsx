import React from 'react';
import ContactRow from './ContactRow.jsx';


function ContactList({contacts, selectContact}) {

  return (
    <div>
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
                <ContactRow 
                  key={`contact table row: ${idx}`}
                  contact={contact}
                  selectContact={selectContact}
                />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ContactList;