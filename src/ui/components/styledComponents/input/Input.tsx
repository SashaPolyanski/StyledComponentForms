import React from 'react';

import styled from 'styled-components';

const Inputs = styled.input<InputType>`
  font-size: 18px;
  padding: 10px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  border: ${props => props.border};

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: #1f1f1f;
  margin-top: 40px;
  display: block;
`;

export const Input = ({ register, type, name, label, required, ...rest }: InputType) => (
  <Label>
    {label}
    <Inputs {...register(name, { required })} {...rest} type={type} />
  </Label>
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
