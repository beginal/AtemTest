import React from "react";
import styled from "styled-components";

const CardList = ({ children }) => {
  return (
    <Wrap>
      <div>{children}</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  > div {
    display: flex;
    flex-flow: row wrap;
    width: 1200px;
    max-width: 1200px;
    height: 100vh;
  }
`;

export default CardList;
