import React from 'react';
import ContactRow from './ContactRow';


function ContactList({contacts}) {

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