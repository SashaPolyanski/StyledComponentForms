import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledButton = styled.button<ButtonType>`
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  text-align: center;
  border: none;
  height: 60px;
  border-radius: 8px;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  margin-top: ${props => props.marginTop};
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;
const Button = (props: ButtonType) => <StyledButton {...props} />;

export default Button;
type ButtonType = {
  disabled?: boolean;
  children: ReactNode;
  backgroundColor: string;
  fontWeight?: number;
  color: string;
  width: string;
  marginTop?: string;
  onClick?: () => void;
};
