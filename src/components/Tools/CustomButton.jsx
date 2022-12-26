import React from "react";
import styled from "styled-components";

const CustomButton = (props) => {
  return <Button onClick={() => props.onClick()}>{props.children}</Button>;
};

const Button = styled.button`
  width: 60px;
  height: 30px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #eee;
`;

export default CustomButton;
