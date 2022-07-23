import { log } from 'util';

import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import Button from '../../components/button/Button';
import { Input } from '../../components/input/Input';

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: 'all' });
  const onSubmit: SubmitHandler<FormValues> = data => {
    // eslint-disable-next-line no-alert
    console.log(data.login);
    console.log(data.password);
    console.log(data.rememberMe);
  };
  // if (isLogin) {
  //   return <Navigate to="/profile" />;
  // }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="login"
          register={register}
          type="text"
          label="login"
          required="Поле обязательно"
        />
        {errors.login && <div>{errors.login.message}</div>}
        <Input
          name="password"
          register={register}
          type="password"
          label="password"
          required="Поле обязательно"
        />
        {errors.password && <div>{errors.password.message}</div>}
        <Input
          name="rememberMe"
          type="checkbox"
          register={register}
          label="rememberMe"
          required={false}
        />
        <Button name="Войти" />
      </form>
    </div>
  );
};
export default Login;

type FormValues = {
  login: string;
  password: string;
  rememberMe: boolean;
};
