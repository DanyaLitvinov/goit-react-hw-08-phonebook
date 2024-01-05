import styled from 'styled-components';


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-weight: bold;
  position: relative;
`;

export const Button = styled.button`
  margin: 0 auto;
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  width: 150px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgreen;
  }
`

