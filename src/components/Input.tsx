import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type?: string | undefined;
  value: string;
  placeholder?: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type = 'text', value, placeholder, onChange }: InputProps) {
  return <Container type={type} value={value} placeholder={placeholder} onChange={onChange} />;
}

export default Input;

const Container = styled.input`
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;

  background-color: transparent;

  font-size: 16px;
  line-height: 24px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.darkGray};

  ::placeholder {
    color: ${(props) => props.theme.colors.middleGray};
  }
`;
