import React from 'react';
import SignupTemplate from '../templates/SignupTemplate';
import BaseTemplate from '../templates/BaseTemplate';
import { useHistory } from 'react-router-dom';

interface SignupPageProps {
  logged: boolean;
}

//TODO: api 로딩 로직 구현
function SignupPage({ logged }: SignupPageProps) {
  const history = useHistory();
  const handleSignup = async (email: string, username: string, password: string) => {
    try {
      // TODO: 여기서 회원 등록 api 호출, 더미 데이터 삭제
      history.push(`/accounts/login`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <BaseTemplate>
      <SignupTemplate onSubmit={handleSignup} />
    </BaseTemplate>
  );
}

export default SignupPage;
