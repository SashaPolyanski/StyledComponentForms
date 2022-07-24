import React from 'react';

import styled from 'styled-components';

const StyledDivWarning = styled.div`
  width: 20px;
  height: 20px;
  border: 1px transparent none;
  background-color: #ffc8c8;
  margin: 0 14px 0 20px;
  border-radius: 50%;
  color: #ee6565;
`;
const DivWarning = () => <StyledDivWarning>!</StyledDivWarning>;

export default DivWarning;
