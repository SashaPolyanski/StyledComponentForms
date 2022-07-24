import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { SelectIsLogin, SelectUserLogin } from '../../../bll/selectors/selectors';
import { setIsLoggedIn } from '../../../bll/slices/auth';
import { PATH } from '../../../common/constants/constants';
import Button from '../../components/styledComponents/button/Button';
import FlexContainer from '../../components/styledComponents/flexContainer/FlexContainer';
import TextBlock from '../../components/styledComponents/textBlock/TextBlock';

const Profile = () => {
  const userLogin = useSelector(SelectUserLogin);
  const isLogin = useSelector(SelectIsLogin);
  const dispatch = useDispatch();

  if (!isLogin) {
    return <Navigate to={PATH.LOGIN} />;
  }

  const logoutHandler = () => {
    dispatch(setIsLoggedIn({ value: false }));
  };

  return (
    <div>
      <FlexContainer>
        <TextBlock marginRight="5px" marginTop="250px" fontWeight={400} fontSize="32px">
          Здравствуйте,
        </TextBlock>
        <TextBlock marginTop="250px" fontWeight={700} fontSize="32px">
          {userLogin}
        </TextBlock>
      </FlexContainer>
      <FlexContainer>
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
      </FlexContainer>
    </div>
  );
};

export default Profile;
