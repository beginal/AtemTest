import React from "react";
import styled from "styled-components";

const CardList = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.mobile} {
    justify-content: center;
  }
`;

export default CardList;
