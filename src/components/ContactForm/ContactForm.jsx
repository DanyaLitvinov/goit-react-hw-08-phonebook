import React, { useEffect, useState } from 'react';
import { Button, Form, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../redux/Contacts/ContactsSelectors';
import { addContact } from '../../redux/Contacts/ContactsOperations';


const ContactForm = () => {
  const [dirtyName, setDirtyName] = useState(false)
  const [dirtyNumber, setDirtyNumber] = useState(false)
  const [nameError, setNameError] = useState("Name couldn't be empty")
  const [numberError, setNumberError] = useState("Number couldn't be empty")
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  const [valid, setValid] = useState(false);


  const contacts = useSelector(setContacts);
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    const {name, value} = e.target;
    switch (name) {
      case 'name':
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setDirtyName(true)
        break;
      default:
        return;
    }
    const validationForName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    if (!validationForName.test(String(e.target.value).toLowerCase())) {
      setNameError("Incorrect Name")
    } else {
      setNameError("")
    }
  }
  const handleChangeNumber = (e) => {
    const {name, value} = e.target;
    switch (name) {
      case 'number':
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setDirtyNumber(true)
        break;

      default:
        return;
    }
    const validationForNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    if (!validationForNumber.test(String(e.target.value).toLowerCase())) {
      setNumberError("Incorrect Number")
    } else {
      setNumberError("")
    }
  }


  useEffect(()=>{
    if (nameError || numberError){
      setValid(false)
    }
    else {
      setValid(true)
    }

  },[nameError, numberError])
  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts?.some(
      ({ name }) => name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isInContacts) {
      return alert(`${formData.name} is already in contacts`);
    }

    dispatch(addContact(formData));

    setFormData({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:  {(dirtyName && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChangeName}
          required
          autoComplete={"off"}
          placeholder={'Andrew or Andrew Galardo'}
        />
      </Label>
      <Label>
        Number: {(dirtyNumber && numberError) && <div style={{ color: 'red' }}>{numberError}</div>}
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChangeNumber}
          required
          autoComplete={"off"}
          placeholder={"123-456-7890"}
        />
      </Label>
      <Button disabled={!valid} type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
