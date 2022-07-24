import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { setIsLoggedIn } from '../../../bll/slices/auth';
import { RootState } from '../../../bll/store';
import Button from '../../components/styledComponents/button/Button';
import Flex from '../../components/styledComponents/flex/Flex';
import Title from '../../components/styledComponents/title/Title';
import Wrapper from '../../components/styledComponents/wrapper/Wrapper';

const Profile = () => {
  const userLogin = useSelector((state: RootState) => state.user.userLogin);
  const isLogin = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  if (!isLogin) {
    return <Navigate to="/" />;
  }
  const logoutHandler = () => {
    dispatch(setIsLoggedIn({ value: false }));
  };
  return (
    <div>
      <Flex>
        <Title marginRight="5px" marginTop="250px" fontWeight={400} fontSize="32px">
          Здравствуйте,
        </Title>
        <Title marginTop="250px" fontWeight={700} fontSize="32px">
          {userLogin}
        </Title>
      </Flex>
      <Flex>
        <Button
          backgroundColor="#F5F5F5"
          color="#000000"
          fontWeight={700}
          onClick={logoutHandler}
          marginTop="50px"
          width="200px"
        >
          выйти
        </Button>
      </Flex>
    </div>
  );
};

export default Profile;
