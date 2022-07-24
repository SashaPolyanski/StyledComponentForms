import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { PATH } from '../../common/constants/constants';
import FlexContainer from '../components/styledComponents/flexContainer/FlexContainer';
import TextBlock from '../components/styledComponents/textBlock/TextBlock';
import WrapperContainer from '../components/styledComponents/wrapperContainer/WrapperContainer';
import Login from '../pages/login/Login';
import Profile from '../pages/profile/Profile';

export const RoutesComponent = () => (
  <>
    <TextBlock marginTop="40px" fontSize="64px" fontWeight={700}>
      ONLY.
    </TextBlock>
    <FlexContainer>
      <WrapperContainer>
        <Routes>
          <Route path={PATH.LOGIN} element={<Login />} />
          <Route path={PATH.PROFILE} element={<Profile />} />
        </Routes>
      </WrapperContainer>
    </FlexContainer>
  </>
);
