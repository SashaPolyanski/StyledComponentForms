import React from 'react';

import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 10px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    z-index: 7;
    background-color: ${props => (props.checked ? '#4a67ff' : '#ffffff')};
    left: 2px;
    top: 2px;
    border-radius: 3px;
    transition: all 150ms;
  }
`;
const StyledLabelText = styled.span`
  margin-left: 15px;
`;

type CheckedPropsType = {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: 'rememberMe';
  register: Function;
  label?: string;
  type?: 'text' | 'password' | 'checkbox';
};

const Checkbox = ({
  checked,
  register,
  name,
  type,
  label,
  ...rest
}: CheckedPropsType) => {
  const content = (
    <CheckboxContainer>
      <HiddenCheckbox {...register(name)} {...rest} type={type} />
      <StyledCheckbox checked={checked} />
      <StyledLabelText>{label}</StyledLabelText>
    </CheckboxContainer>
  );

  return <label>{content}</label>;
};

export default Checkbox;
