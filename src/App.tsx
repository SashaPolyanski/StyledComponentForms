import React from 'react';

import styled from 'styled-components';

import { RoutesComponent } from './ui/routes/RoutesComponent';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`;
const App = () => (
  <AppWrapper>
    <RoutesComponent />
  </AppWrapper>
);

export default App;
