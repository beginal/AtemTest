import React from "react";
import styled from "styled-components";

const Label = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  display: flex;
  position: absolute;
  top: 24px;
  right: 16px;
  font-size: 12px;
  padding: 5px 8px;
  border: 2px solid ${({ theme }) => theme.colors.Warning};
  color: ${({ theme }) => theme.colors.Warning};
  border-radius: 12px;
`;

export default Label;
