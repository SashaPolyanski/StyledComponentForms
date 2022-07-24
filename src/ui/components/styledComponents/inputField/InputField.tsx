import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledInputField = styled.div<InputFieldProps>`
  padding-bottom: 30px;
`;

const InputField = (props: InputFieldProps) => <StyledInputField {...props} />;

export default InputField;
type InputFieldProps = {
  children: ReactNode;
};
