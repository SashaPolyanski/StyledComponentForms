import React, { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {
  SelectError,
  SelectIsLoading,
  SelectIsLogin,
} from '../../../bll/selectors/selectors';
import { setError, setIsLoggedIn, setLoadingApp } from '../../../bll/slices/auth';
import { setUserLogin } from '../../../bll/slices/user';
import { InputName, InputType, PATH } from '../../../common/constants/constants';
import Button from '../../components/styledComponents/button/Button';
import Checkbox from '../../components/styledComponents/checkbox/customCheckbox';
import ErrorField from '../../components/styledComponents/ErrorField/ErrorField';
import ErrorFieldSign from '../../components/styledComponents/errorFieldSign/errorFieldSign';
import ErrorWrapper from '../../components/styledComponents/errorWrapper/ErrorWrapper';
import { Input } from '../../components/styledComponents/input/Input';
import InputErrorText from '../../components/styledComponents/inputErrorText/InputErrorText';
import InputField from '../../components/styledComponents/inputField/InputField';
import WrapperContainer from '../../components/styledComponents/wrapperContainer/WrapperContainer';

const Login = () => {
  const isLogin = useSelector(SelectIsLogin);
  const isLoading = useSelector(SelectIsLoading);
  const error = useSelector(SelectError);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: 'all' });

  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(setError({ value: false }));
    const promise = new Promise((res, rej) => {
      dispatch(setLoadingApp({ value: true }));
      setTimeout(() => {
        if (data.login === 'steve.jobs@example.com' && data.password === 'password') {
          res('success');
          reset();
        } else {
          rej();
        }
      }, 2000);
    });
    promise.then(() => {
      batch(() => {
        dispatch(setIsLoggedIn({ value: true }));
        dispatch(setUserLogin({ value: data.login }));
      });
    });
    promise.catch(() => {
      dispatch(setError({ value: true }));
    });
    promise.finally(() => dispatch(setLoadingApp({ value: false })));
  };

  if (isLogin) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <WrapperContainer marginTop="100px">
      <ErrorWrapper>
        {error && (
          <ErrorField>
            <ErrorFieldSign />
            Пользователя {getValues('login')} не существует
          </ErrorField>
        )}
      </ErrorWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField>
          <Input
            name={InputName.LOGIN}
            register={register}
            type={InputType.TEXT}
            label="Логин"
            required="Поле обязательно"
            border={errors.login && '1px solid red'}
            placeholder="steve.jobs@example.com"
          />
          {errors.login && <InputErrorText>{errors.login.message}</InputErrorText>}
        </InputField>
        <InputField>
          <Input
            name={InputName.PASSWORD}
            register={register}
            type={InputType.PASSWORD}
            label="Пароль"
            required="Поле обязательно"
            border={errors.password && '1px solid red'}
            placeholder="password"
          />
          {errors.password && <InputErrorText>{errors.password.message}</InputErrorText>}
        </InputField>
        <Checkbox
          name={InputName.REMEMBER}
          checked={checked}
          register={register}
          type={InputType.CHECKBOX}
          onChange={e => setChecked(e.target.checked)}
          label="Запомнить пароль"
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
    </WrapperContainer>
  );
};
export default Login;

export type FormValues = {
  login: string;
  password: string;
  rememberMe: boolean;
  fieldError: string;
};
