import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledError = styled.div`
  color: red;
  position: absolute;
`;
const Error = (props: ErrorProps) => <StyledError {...props} />;

export default Error;
type ErrorProps = {
  children: ReactNode;
};
