import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledDivError = styled.div<DivErrorProps>`
  border-radius: 8px;
  width: 100%;
  height: 60px;
  background-color: #f5e9e9;
  border: 1px solid #e26f6f;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const DivError = (props: DivErrorProps) => <StyledDivError {...props} />;

export default DivError;
type DivErrorProps = {
  children: ReactNode;
};
