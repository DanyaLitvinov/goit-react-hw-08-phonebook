import React, {useEffect} from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { FormContainer } from '../../components/ContactForm/ContactForm.styled';

const Contacts = () => {
  return (
    <FormContainer>
      <ContactForm/>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter/>
        <ContactList/>
    </FormContainer>
  );
};

export default Contacts;
