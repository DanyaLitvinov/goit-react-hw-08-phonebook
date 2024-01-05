import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth';
import { Button, Form, Label } from '../../components/ContactForm/ContactForm.styled';
import { RevealPasswordButton, SignUpContainer } from './Registration.styled';
import EyeOpen from '../../components/Icons/eye.svg';
import EyeClose from '../../components/Icons/eye-blocked.svg';


const Registration = () => {
  const [name, setName] = useState('');
  const [dirtyName, setDirtyName] = useState(false);
  const [nameError, setNameError] = useState('Name form can\'t be empty');
  const [email, setEmail] = useState('');
  const [dirtyEmail, setDirtyEmail] = useState(false);
  const [emailError, setEmailError] = useState('Email form can\'t be empty');
  const [dirtyPassword, setDirtyPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordError, setPasswordError] = useState('Password can\'t be empty');


  const [valid, setValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (passwordError || emailError || nameError) {
      setValid(false);
    } else {
      setValid(true);
    }

  }, [passwordError]);

  const handleChangeName = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        setDirtyName(true);
        break;
      default:
        return;
    }
    const validationForName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (!validationForName.test(String(e.target.value).toLowerCase())) {
      setNameError('Incorrect Name');
    } else {
      setNameError('');
    }

  };
  const handleChangeEmail = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        setDirtyEmail(true);
        break;
      default:
        return;
    }
    const validationForEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!validationForEmail.test(String(e.target.value).toLowerCase())) {
      setEmailError('Not required symbols for email');
    } else {
      setEmailError('');
    }
  };
  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'password':
        setPassword(value);
        setDirtyPassword(true);
        break;
      default:
        return;
    }
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 12) {
      setPasswordError('Required 3 - 12 symbols');
    } else {
      setPasswordError('');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <SignUpContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={'name'}>Name: {(dirtyName && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
          <input placeholder={'Andrew'}
                 type='text' autoComplete='off' id={'name'}
                 name={'name'} value={name}
                 onChange={handleChangeName} /></Label>
        <Label htmlFor={'email'}>Email: {(dirtyEmail && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
          <input placeholder={'example@gmail.com'} type='text' autoComplete='off'
                 id={'email'} name={'email'}
                 value={email}
                 onChange={handleChangeEmail} />
        </Label>
        <Label htmlFor={'password'}>Password: {(dirtyPassword && passwordError) &&
          <div style={{ color: 'red' }}>{passwordError}</div>}
          <input placeholder={'any 3-12 symbols'}
                 type={passwordShown ? 'text' : 'password'} autoComplete='off'
                 id={'password'}
                 name={'password'} data-sign='☺' value={password}
                 onChange={handleChangePassword} />
          <RevealPasswordButton onClick={togglePassword}>{passwordShown ?
            <img src={EyeOpen} alt='Hide' /> : <img src={EyeClose} alt='Show' />}</RevealPasswordButton>
        </Label>
        <Button disabled={!valid} type='submit'>Submit</Button>
      </Form>
    </SignUpContainer>
  );
};

export default Registration;
