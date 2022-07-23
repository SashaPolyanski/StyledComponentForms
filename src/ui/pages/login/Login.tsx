import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { setError, setIsLoggedIn, setLoadingApp } from '../../../bll/slices/auth';
import { RootState } from '../../../bll/store';
import Button from '../../components/styledComponents/button/Button';
import Error from '../../components/styledComponents/error/Error';
import { Input } from '../../components/styledComponents/input/Input';

const Login = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isLoggedIn);
  const isLoading = useSelector((state: RootState) => state.auth.loadingApp);
  const error = useSelector((state: RootState) => state.auth.error);
  const dispatch = useDispatch();
  console.log(error);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: 'all' });
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
    promise.then(() => dispatch(setIsLoggedIn({ value: true })));
    promise.catch(() => dispatch(setError({ value: true })));
    promise.finally(() => dispatch(setLoadingApp({ value: false })));
    const userData = JSON.stringify(data);
    localStorage.setItem('UserInfo', userData);
  };
  if (isLogin) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      {error && (
        <Input required={false} name="fieldError" register={register} type="text" error />
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
        <Input
          name="rememberMe"
          type="checkbox"
          register={register}
          label="rememberMe"
          required={false}
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
    </div>
  );
};
export default Login;

export type FormValues = {
  login: string;
  password: string;
  rememberMe: boolean;
  fieldError: string;
};
