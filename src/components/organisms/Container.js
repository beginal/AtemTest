import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2rem 10rem;
  border: 1px solid gray; // 임시border
  height: 100vh;
`;

export default Container;
