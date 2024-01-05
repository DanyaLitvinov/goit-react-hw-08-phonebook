import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth';
import EyeOpen from '../../components/Icons/eye.svg';
import EyeClose from '../../components/Icons/eye-blocked.svg';
import { LoginContainer, RevealPasswordButton } from './Login.styled';
import { Button, Form, Label } from '../../components/ContactForm/ContactForm.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [dirtyEmail, setDirtyEmail] = useState(false);
  const [emailError, setEmailError] = useState('Email form can\'t be empty');
  const [dirtyPassword, setDirtyPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordError, setPasswordError] = useState('Password can\'t be empty');
  const dispatch = useDispatch();
  const [valid, setValid] = useState(false);


  useEffect(() => {
    if (passwordError || emailError) {
      setValid(false);
    } else {
      setValid(true);
    }

  }, [passwordError]);

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
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logInUser({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <LoginContainer>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor={'email'}>Email: {(dirtyEmail && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
            <input placeholder={'example@gmail.com'} type='text'
                   autoComplete='off' id={'email'} name={'email'}
                   value={email}
                   onChange={handleChangeEmail} />
          </Label>
          <Label htmlFor={'password'}>Password: {(dirtyPassword && passwordError) && <div style={{ color: 'red'}}>{passwordError}</div>}
            <input placeholder={'any 3-12 symbols'}
                   type={passwordShown ? 'text' : 'password'}
                   autoComplete='off' id={'password'}
                   name={'password'} data-sign='☺' value={password}
                   onChange={handleChangePassword} />
            <RevealPasswordButton onClick={togglePassword}>{passwordShown ?
              <img src={EyeOpen} alt='Hide' /> : <img src={EyeClose} alt='Show' />}</RevealPasswordButton>
          </Label>
          <Button disabled={!valid} type='submit'>Submit</Button>
        </Form>
    </LoginContainer>
  );
};

export default Login;
