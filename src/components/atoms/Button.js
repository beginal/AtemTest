import React from "react";
import styled, { css } from "styled-components";

const Button = ({ onClick, children, primary }) => {
  const styleProps = {
    primary,
  };
  return (
    <Wrap onClick={onClick} {...styleProps}>
      {children}
    </Wrap>
  );
};

const Wrap = styled.button`
  border: none;
  outline: none;
  padding: 6px 12px;
  font-weight: bold;
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.colors.Primary500};
  border-radius: 4px;
  cursor: pointer;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.Primary500 : "white"};
  color: ${({ primary, theme }) =>
    primary ? "white" : theme.colors.Primary500};
`;

export default Button;
