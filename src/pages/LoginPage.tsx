import React from 'react';
import LoginTemplate from '../templates/LoginTemplate';
import BaseTemplate from '../templates/BaseTemplate';
import { Redirect, useLocation } from 'react-router-dom';
import { setUser } from '../lib/utils';

interface LoginPageProps {
  logged: boolean;
  localLogin: () => void;
}

//TODO: api 로딩 로직 구현
function LoginPage({ logged, localLogin }: LoginPageProps) {
  const handleLogin = async (email: string, password: string) => {
    try {
      // TODO: 여기서 login api 호출, 더미 데이터 삭제
      const dummyUser = {
        email: 'zidhdy@gmail.com',
        username: '웅22',
        token:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkb3FuZG5mZm8xQGdtYWlsLmNvbSIsImlzcyI6InN0dWR5ZmFybSIsImlhdCI6MTU5Njk0NzA3MCwibmFtZSI6IuyViOyerOyEsTEiLCJzZXEiOjEsImV4cCI6MzAzOTY5NDcwNzB9.AR_kUyBUH3nFxUZD4K3ioHPRQVbSzf3Rch0oPUitgc4',
      };
      setUser(dummyUser);
      localLogin();
    } catch (e) {
      console.log(e);
    }
  };

  const location = useLocation();
  const { from } = (location.state as { from: any }) || { from: { pathname: '/' } };

  if (logged) return <Redirect to={from} />;

  return (
    <BaseTemplate>
      <LoginTemplate onSubmit={handleLogin} />
    </BaseTemplate>
  );
}

export default LoginPage;
