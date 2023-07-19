import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import React from 'react';
import ContactsList from 'components/Contacts/ContactsList';

const Contacts = () => {
  return (
    <div>
      <Form />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
