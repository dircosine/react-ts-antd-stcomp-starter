import React, { useRef } from 'react';
import styled from 'styled-components';

interface TextareaProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  minHeight?: number;
  isFullBorderd?: boolean;
}

function Textarea({
  placeholder,
  value,
  onChange,
  minHeight = 30,
  isFullBorderd = false,
}: TextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const resizeTextarea = (): void => {
    ref.current?.style.setProperty('height', `${minHeight}px`);
    ref.current?.style.setProperty('height', `${ref.current?.scrollHeight}px`);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    resizeTextarea();
    onChange(e);
  };

  return (
    <Container
      ref={ref}
      placeholder={placeholder}
      value={value}
      minHeight={minHeight}
      isFullBorderd={isFullBorderd}
      onChange={handleOnChange}
    />
  );
}

export default Textarea;

type withCustomProps = {
  minHeight?: number;
  isFullBorderd?: boolean;
};

const Container = styled.textarea<withCustomProps>`
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
  height: ${(props) => props.minHeight}px;

  ${(props) =>
    props.isFullBorderd
      ? `border: 1px solid ${props.theme.colors.lightGray};`
      : `border-bottom: 1px solid ${props.theme.colors.darkGray};`}

  ::placeholder {
    color: ${(props) => props.theme.colors.middleGray};
  }
`;
