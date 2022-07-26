import React, { ReactNode } from 'react';

import styled from 'styled-components';

const StyledTitle = styled.div<TextProps>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin-top: ${props => props.marginTop};
  margin-right: ${props => props.marginRight};
  text-align: center;
`;

const TextBlock = (props: TextProps) => <StyledTitle {...props} />;

export default TextBlock;

type TextProps = {
  children: ReactNode;
  fontWeight: number;
  fontSize: string;
  marginTop?: string;
  marginRight?: string;
};
