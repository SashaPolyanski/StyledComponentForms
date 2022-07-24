import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledErrorWrapper = styled.div<WrapperProps>`
  height: 60px;
  margin-bottom: 50px;
`;

const ErrorWrapper = (props: WrapperProps) => <StyledErrorWrapper {...props} />;

type WrapperProps = {
  children: ReactNode;
};
export default ErrorWrapper;
