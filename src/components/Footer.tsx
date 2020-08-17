import React from 'react';
import styled from 'styled-components';

interface FooterProps {}

function Footer(props: FooterProps) {
  return <Container>푸터</Container>;
}

export default Footer;

const Container = styled.div`
  margin-top: 50px;
  background-color: ${(props) => props.theme.colors.middleGray};
  height: 50px;
`;
