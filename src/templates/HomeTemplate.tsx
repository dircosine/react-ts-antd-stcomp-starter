import React from 'react';
import styled from 'styled-components';
import FilterWrap from '../components/FilterWrap';
import { Space } from 'antd';
import { useHistory } from 'react-router-dom';

interface HomeTemplateProps {
  data: any;
  loading: boolean;
}

function HomeTemplate({ data, loading }: HomeTemplateProps) {
  const history = useHistory();
  return (
    <Container>
      <Space direction="vertical">
        <Banner>
          <p>Description Of This Service</p>
        </Banner>
        <FilterWrap />
      </Space>
    </Container>
  );
}

export default HomeTemplate;

const Banner = styled.div`
  text-align: center;
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.colors.lightGray};
  p {
    line-height: 300px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 50px);
`;
