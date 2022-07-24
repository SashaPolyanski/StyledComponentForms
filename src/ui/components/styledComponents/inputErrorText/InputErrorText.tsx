import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledError = styled.div`
  color: red;
  position: absolute;
`;
const InputErrorText = (props: ErrorProps) => <StyledError {...props} />;

export default InputErrorText;
type ErrorProps = {
  children: ReactNode;
};
