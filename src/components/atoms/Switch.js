import React from "react";
import styled, { css } from "styled-components";

const Switch = ({ text, switchToggle, isToggle }) => {
  return (
    <Wrap isToggle={isToggle}>
      <div onClick={switchToggle}></div>
      {text}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  > div {
    position: relative;
    background: #bbdefb;
    ${({ isToggle }) =>
      isToggle
        ? css`
            background: #bbdefb;
          `
        : css`
            background: #c2c2c2;
          `}
    width: 34px;
    height: 14px;
    margin-right: 5px;
    border-radius: 20px;
    cursor: pointer;
    &::before {
      content: "";
      border-radius: 50%;
      position: absolute;
      transition: left 0.3s;
      top: 0;
      left: ${({ isToggle }) => (isToggle ? "14px" : "-2px")};
      background: ${({ theme, isToggle }) =>
        isToggle ? theme.colors.Primary700 : "#f5f5f5"};
      transform: translateY(-3.5px);
      width: 20px;
      height: 20px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.12),
        0px 2px 2px rgba(0, 0, 0, 0.24);
    }
  }
`;

export default Switch;
