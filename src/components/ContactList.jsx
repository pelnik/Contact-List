import React from 'react';


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
  )
}

export default ContactList;