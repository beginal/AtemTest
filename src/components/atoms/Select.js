import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";
import { addCheckedItem, removeCheckedItem } from "reducer/DashboardReducer";

const Select = ({ title, list, checkedList }) => {
  const [isOpenList, setIsOpenList] = useState(true);
  const selectEl = useRef(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleToggle = useCallback(({ target }) => {
    if (isOpenList && !selectEl.current.contains(target)) {
      setIsOpenList(false);
    } else if (!isOpenList && selectEl.current.contains(target)) {
      setIsOpenList(true);
    }
  });

  const handleChecked = (name) => {
    if (checkedItems.includes(name)) {
      dispatch(addCheckedItem(name));
    } else {
      dispatch(removeCheckedItem(name));
    }
  };

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  useEffect(() => {
    window.addEventListener("click", handleToggle);
    return () => {
      window.removeEventListener("click", handleToggle);
    };
  }, [handleToggle]);

  return (
    <Wrap ref={selectEl} isOpenList={isOpenList}>
      <div className="label" onClick={handleToggle}>
        {title} <AiFillCaretDown />
      </div>
      {isOpenList && (
        <div className="itemList" onClick={(e) => e.stopPropagation()}>
          <ul>
            {list.map((item) => (
              <li onClick={() => handleChecked(item)}>
                <input
                  type="checkbox"
                  name="itemList"
                  value={item}
                  checked={checkedItems.includes(item)}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  display: inline-flex;
  .label {
    align-items: center;
    font-size: 12px;
    color: ${({ theme, isOpenList }) =>
      isOpenList ? "white" : theme.colors.Gray900};
    border: 1px solid #939fa5;
    border-radius: 4px;
    background: ${({ theme, isOpenList }) =>
      isOpenList ? theme.colors.Primary700 : "white"};
    cursor: pointer;
    padding: 9px 12px;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.Primary500};
    }
    > svg {
      margin-left: 12px;
      color: ${({ isOpenList }) => (isOpenList ? "white" : "#939fa5")};
    }
  }
  .itemList {
    position: absolute;
    bottom: -77px;
    min-width: 130px;
    padding: 10px;
    padding-left: 5px;
    border: 1px solid #939fa5;
    border-radius: 4px;
    background: white;
    display: inline-flex;
    font-size: 14px;
    font-weight: 500;
    z-index: 2;
    ul {
      li {
        display: flex;
        align-items: center;
        margin: 8px;
        cursor: pointer;
        input {
          margin: 0;
        }
        span {
          padding-left: 5px;
        }
      }
    }
  }
`;

export default Select;
