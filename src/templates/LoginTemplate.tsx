import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Divider } from 'antd';
import TextButton from '../components/TextButton';
import { useHistory } from 'react-router-dom';

interface LoginTemplateProps {
  onSubmit: (email: string, password: string) => void;
}

function LoginTemplate({ onSubmit }: LoginTemplateProps) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    onSubmit(email, password);
  };

  return (
    <Container>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <AuthInput
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthButton shape="round" type="primary" htmlType="submit" disabled={!email || !password}>
          로그인
        </AuthButton>
        <Divider />
        <p style={{ textAlign: 'center', marginBottom: 32 }}>
          계정이 없으신가요?
          <TextButton
            text="가입하기"
            onClick={() => {
              history.push(`/accounts/signup`);
            }}
          />
        </p>
        <TextButton text="비밀번호를 잊으셨나요?" onClick={() => {}} />
      </AuthForm>
    </Container>
  );
}

export default LoginTemplate;

export const AuthButton = styled(Button)`
  margin-top: 32px;
  width: 100%;
`;

export const AuthInput = styled(Input)`
  margin-top: 16px;
  width: 100%;
  font-size: 16px;
`;

export const AuthForm = styled.form`
  padding-top: 100px;
  text-align: center;
  width: 70%;
  max-width: 300px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 50px);
`;
