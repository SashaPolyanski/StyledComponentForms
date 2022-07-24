import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { setError, setIsLoggedIn, setLoadingApp } from '../../../bll/slices/auth';
import { setUserLogin } from '../../../bll/slices/user';
import { RootState } from '../../../bll/store';
import Button from '../../components/styledComponents/button/Button';
import { Checkbox } from '../../components/styledComponents/checked/Checked';
import DivError from '../../components/styledComponents/divError/DivError';
import DivWarning from '../../components/styledComponents/divWarning/DivWarning';
import Error from '../../components/styledComponents/error/Error';
import { Input } from '../../components/styledComponents/input/Input';
import Wrapper from '../../components/styledComponents/wrapper/Wrapper';

const Login = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isLoggedIn);
  const isLoading = useSelector((state: RootState) => state.auth.loadingApp);
  const error = useSelector((state: RootState) => state.auth.error);
  const userLogin = useSelector((state: RootState) => state.user.userLogin);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: 'all' });
  console.log(getValues('login'));
  console.log(register);
  const onSubmit: SubmitHandler<FormValues> = data => {
    const promise = new Promise((res, rej) => {
      dispatch(setLoadingApp({ value: true }));
      setTimeout(() => {
        if (data.login === 'steve.jobs@example.com' && data.password === 'password') {
          res('success');
        } else {
          rej();
        }
        reset();
      }, 2000);
    });
    promise.then(() => {
      batch(() => {
        dispatch(setIsLoggedIn({ value: true }));
        dispatch(setUserLogin({ value: data.login }));
      });
    });
    promise.catch(() => {
      batch(() => {
        dispatch(setError({ value: true }));
        dispatch(setUserLogin({ value: data.login }));
      });
    });
    promise.finally(() => dispatch(setLoadingApp({ value: false })));
  };
  if (isLogin) {
    return <Navigate to="/profile" />;
  }

  return (
    <Wrapper marginTop="100px">
      {error && (
        <DivError>
          <DivWarning />
          Пользователя {userLogin} не существует
        </DivError>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="login"
          register={register}
          type="text"
          label="Логин"
          required="Поле обязательно"
          border={errors.login && '1px solid red'}
        />
        {errors.login && <Error>{errors.login.message}</Error>}
        <Input
          name="password"
          register={register}
          type="password"
          label="Пароль"
          required="Поле обязательно"
          border={errors.password && '1px solid red'}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
        <Checkbox
          name="rememberMe"
          label="rememberMe"
          type="checkbox"
          register={register}
        />

        <Button
          width="100%"
          color="#ffffff"
          backgroundColor="#4A67FF"
          disabled={isLoading}
        >
          Войти
        </Button>
      </form>
    </Wrapper>
  );
};
export default Login;

export type FormValues = {
  login: string;
  password: string;
  rememberMe: boolean;
  fieldError: string;
};
