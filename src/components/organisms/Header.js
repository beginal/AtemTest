import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrap>
      <Logo>
        <img src="images/Logo.png" alt="CNPAlogo" />
      </Logo>
      <TopMenu>
        <span>
          <img src="images/Vector.png" alt="icon" />A 가공 업체
        </span>
        <span>로그아웃</span>
      </TopMenu>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.Primary700};
  padding: 25px 40px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const Logo = styled.div`
  > img {
    width: 153px;
    height: 20px;
  }
`;

const TopMenu = styled.div`
  display: flex;
  color: white;
  span {
    position: relative;
    display: flex;
    padding: 0 35px;
    &:first-of-type::before {
      content: "";
      position: absolute;
      right: 0;
      width: 2px;
      height: 100%;
      background: white;
    }
    img {
      width: 16.67px;
      height: 15px;
      margin-right: 5px;
    }
  }
`;

export default Header;
