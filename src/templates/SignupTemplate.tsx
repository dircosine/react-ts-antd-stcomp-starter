import React, { useState } from 'react';
import styled from 'styled-components';
import { AuthForm, AuthInput, AuthButton } from './LoginTemplate';
import { Divider } from 'antd';
import TextButton from '../components/TextButton';
import { useHistory } from 'react-router-dom';

interface SignupTemplateProps {
  onSubmit: (email: string, username: string, password: string) => void;
}

function SignupTemplate({ onSubmit }: SignupTemplateProps) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateInput = (email: string, username: string, password: string) => {
    //TODO: 인풋 검증 로직 구현
    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !username || !password) return;
    if (!validateInput) return;
    onSubmit(email, username, password);
  };

  return (
    <Container>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <AuthInput
          placeholder="닉네임"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AuthInput
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthButton
          shape="round"
          type="primary"
          htmlType="submit"
          disabled={!email || !username || !password}
        >
          가입하기
        </AuthButton>
        <Divider />
        <p style={{ textAlign: 'center', marginBottom: 32 }}>
          계정이 있으신가요?
          <TextButton
            text="로그인"
            onClick={() => {
              history.push(`/accounts/login`);
            }}
          />
        </p>
      </AuthForm>
    </Container>
  );
}

export default SignupTemplate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 50px);
`;
