import React from 'react';

// eslint-disable-next-line react/button-has-type
const Button = ({ name }: ButtonType) => <button>{name}</button>;

export default Button;

type ButtonType = {
  name: string;
};
