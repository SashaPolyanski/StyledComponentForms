import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.div<WrapperProps>`
  width: 640px;
  margin-top: ${props => props.marginTop};
`;

const WrapperContainer = (props: WrapperProps) => <StyledWrapper {...props} />;

type WrapperProps = {
  children: ReactNode;
  marginTop?: string;
};
export default WrapperContainer;
