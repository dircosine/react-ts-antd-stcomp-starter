import React from 'react';
import styled from 'styled-components';
import { bi } from '../img';
import { Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';

export type HeaderType = 'basic' | 'auth' | 'menu';

interface HeaderProps {
  type?: HeaderType;
}

function Header({ type = 'basic' }: HeaderProps) {
  const history = useHistory();
  return (
    <Container>
      <Link to="/" style={{ height: '80%' }}>
        <Bi src={bi} alt="bi" />
      </Link>
      <DummySpace />
      {type === 'auth' && (
        <>
          <TextButton type="text" onClick={() => history.push('/accounts/login')}>
            Log in
          </TextButton>
          <Button
            style={{ marginRight: 8 }}
            type="primary"
            shape="round"
            onClick={() => history.push('/accounts/signup')}
          >
            Sign up
          </Button>
        </>
      )}
    </Container>
  );
}

export default Header;

const DummySpace = styled.div`
  flex: 1;
`;

const TextButton = styled(Button).attrs({
  type: 'text',
})`
  span {
    color: white;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Bi = styled.img`
  margin-left: 8px;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.middleGray};
  height: 50px;
`;
