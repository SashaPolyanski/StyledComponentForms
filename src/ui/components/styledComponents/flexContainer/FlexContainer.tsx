import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FlexContainer = (props: FlexType) => <StyledFlex {...props} />;

type FlexType = {
  children: ReactNode;
};
export default FlexContainer;
