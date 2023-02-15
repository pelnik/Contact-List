import React from 'react'
import Favorite from './Favorite.jsx'


function SingleContact({selectedContact, handleClick, selectContact}) {
  return (
    <div id="single-contact">
      <div id="contact-info">
          <p><b>{`Name: ${selectedContact.name}`}</b> </p>
          <p><b>{`Email: ${selectedContact.email}`}</b> </p>
          <p><b>{`Phone: ${selectedContact.phone}`}</b> </p>
          <Favorite
            selectContact={selectContact}
            contact={selectedContact}
          />
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