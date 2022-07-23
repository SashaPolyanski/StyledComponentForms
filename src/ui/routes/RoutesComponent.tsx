import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Flex from '../components/styledComponents/flex/Flex';
import Title from '../components/styledComponents/title/Title';
import Wrapper from '../components/styledComponents/wrapper/Wrapper';
import Login from '../pages/login/Login';
import Profile from '../pages/profile/Profile';

export const PATH = {
  PROFILE: '/profile',
};

export const RoutesComponent = () => (
  <>
    <Title marginTop="40px" fontSize="64px" fontWeight={700}>
      ONLY.
    </Title>
    <Flex>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={PATH.PROFILE} element={<Profile />} />
        </Routes>
      </Wrapper>
    </Flex>
  </>
);
