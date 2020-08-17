import React from 'react';
import styled from 'styled-components';
import { Cascader } from 'antd';
import { CascaderOptionType, CascaderValueType } from 'antd/lib/cascader';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

interface FilterWrapProps {}

function FilterWrap(props: FilterWrapProps) {
  const onChange = (
    value: CascaderValueType,
    selectedOptions?: CascaderOptionType[] | undefined,
  ): void => {};

  return (
    <Container>
      <Cascader
        style={{ width: 80 }}
        size="large"
        options={options}
        onChange={onChange}
        placeholder="주제"
      />
      <Cascader
        style={{ width: 80 }}
        size="large"
        options={options}
        onChange={onChange}
        placeholder="지역 "
      />
    </Container>
  );
}

export default FilterWrap;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 40px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};

  .ant-cascader-input {
    border-radius: 0;
    margin-top: -1px;
    margin-left: -1px;
    border-color: ${(props) => props.theme.colors.lightGray};
  }
  .ant-cascader-input::placeholder {
    color: ${(props) => props.theme.colors.darkGray};
  }
  span {
    color: ${(props) => props.theme.colors.darkGray};
  }
`;
