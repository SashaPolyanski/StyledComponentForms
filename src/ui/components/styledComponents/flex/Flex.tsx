import React from 'react';

import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Flex = (props: any) => <StyledFlex {...props} />;

export default Flex;
