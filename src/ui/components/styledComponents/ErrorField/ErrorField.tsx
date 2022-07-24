import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledErrorField = styled.div<ErrorFieldPropsType>`
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
  margin-bottom: 40px;
`;

const ErrorField = (props: ErrorFieldPropsType) => <StyledErrorField {...props} />;

export default ErrorField;
type ErrorFieldPropsType = {
  children: ReactNode;
};
