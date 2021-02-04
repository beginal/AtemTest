import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [menuPosition, setMenuPosition] = useState("-77vw");

  const MenuToggle = (isOpened) => {
    setIsMenuOpened((props) => !props);
    setMenuPosition(isOpened ? 0 : "-77vw");
    console.log(isOpened);
  };

  const handleWindowResize = useCallback(() => {
    setCurrentWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    // react가 window.innerWidth의 변화를 감지하지 못하니 EventListener를 넣어주어야 함.

    // 다만 이러한 방식으로 이벤트를 추가해도 크롬의 toogle device toolbar는 감지하지 못하는듯함..
  }, [handleWindowResize]);

  return (
    <Wrap>
      {isMenuOpened && (
        <div className="background" onClick={() => MenuToggle(false)}></div>
      )}
      <div className="logo">
        {currentWidth < 377 && (
          <div onClick={() => MenuToggle(true)}>
            <AiOutlineMenu />
          </div>
        )}
        <img src="images/Logo.png" alt="CNPAlogo" />
      </div>
      <Menu menuPosition={menuPosition}>
        <div className="MenuLogo">
          <img src="images/colorLogo.png" alt="CNPAlogo" />
        </div>
        <span>
          <img src="images/Vector.png" alt="icon" /> 파트너정밀가공
        </span>
        <span>로그아웃</span>
      </Menu>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.Primary700};
  padding: 25px 40px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  .background {
    display: none;
  }

  .logo {
    display: flex;
    > img {
      width: 153px;
      height: 20px;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 16px 23px;

    .background {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
    }

    .logo {
      > div {
        margin-right: 15px;
      }
      line-height: 12px;
      > img {
        width: 91.8px;
        height: 12px;
      }
    }
  }
`;

const Menu = styled.div`
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  color: white;
  .MenuLogo {
    display: none;
    padding: 16px 20px;
    img {
      width: 91.8px;
      height: 12px;
    }
  }
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
  @media ${({ theme }) => theme.mobile} {
    position: fixed;
    left: ${({ menuPosition }) => menuPosition};
    display: flex;
    flex-direction: column;
    transition: left 0.5s;
    background: white;
    z-index: 1;
    width: 75vw;
    height: 100vh;
    color: black;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0.24);
    .MenuLogo {
      display: inline-block;
      border-bottom: 1px solid #e9e9e9;
    }
    > span {
      font-size: 14px;
      font-weight: 500;
      padding: 0;
      margin: 0 32px;
      margin-top: 24px;
      > img {
        background: black; // 임시 background
      }
    }
  }
`;

export default Header;
