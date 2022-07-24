import React from 'react';

import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  &:checked {
    content: '';
    width: 14px;
    height: 14px;
    background-color: #27ae60;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;

  &:checked {
    content: '';
    width: 14px;
    height: 14px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
  }
`;
const Checked = styled.label`
  display: flex;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 8px;
    border: 1px solid black;
    &:before {
      content: '';
      width: 20px;
      height: 20px;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }
`;

export const Checkbox = ({
  register,
  type,
  name,
  label,
  required,
  ...rest
}: InputType) => (
  <CheckboxContainer>
    <Input {...register(name, { required })} {...rest} type={type} />
    <Checked>{label} </Checked>
  </CheckboxContainer>
);

type InputType = {
  name?: 'password' | 'login' | 'rememberMe' | 'fieldError';
  register: Function;
  label?: string;
  required?: string | boolean;
  type?: 'text' | 'password' | 'checkbox';
  border?: string;
  error?: boolean;
};
