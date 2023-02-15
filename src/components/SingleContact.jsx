import React from 'react';


function SingleContact({selectedContact, handleClick}) {
  return (
    <div id="single-contact" onClick={handleClick}>
      <div id="contact-info">
          <p><b>{`Name: ${selectedContact.name}`}</b> </p>
          <p><b>{`Email: ${selectedContact.email}`}</b> </p>
          <p><b>{`Phone: ${selectedContact.phone}`}</b> </p>
          <div>
              <b>{`Address:`}</b>
              <p>
                  <b>{`Street: ${selectedContact.address.street}`}</b> 
                  <br />
                  <b>{`City/State: ${selectedContact.address.city}`}</b> 
              </p>
          </div>
          <p><b>{`Company: ${selectedContact.company.name}`}</b> </p>
      </div>
    </div>
  )
}



export default SingleContact;