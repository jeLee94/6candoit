import React from 'react';
import styled from 'styled-components';

const CustomInput = (props) => {
  return <Input>{props.children}</Input>;
};

export default CustomInput;

const Input = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;
