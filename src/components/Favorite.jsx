import React from 'react';

const Favorite = (props) => {
  const { contact, selectContact } = props;

  const updateFavoriteStatus = async ({id, favorite}) => {
    selectContact(id, {favorite: !favorite});
  };

  const updateFavoriteWrapper = () => {
    updateFavoriteStatus(contact)
  }

  return (
    <div className="fav-container" onClick={updateFavoriteWrapper}>
      {contact.favorite ? (
        <img className="fav-image" src="/checked.png"></img>
      ) : (
        <img className="fav-image" src="/unchecked.png"></img>
      )}
      <span>Favorite</span>
    </div>
  );
};

export default Favorite;