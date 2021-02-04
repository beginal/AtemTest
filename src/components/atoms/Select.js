import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";
import {
  addCheckedItem,
  getCardLists,
  removeCheckedItem,
} from "reducer/DashboardReducer";

const Select = ({ title, list }) => {
  const { checkedItems, resetCardLists, cardLists } = useSelector(
    (store) => store.DashboardReducer
  );
  const [isOpenList, setIsOpenList] = useState(false);
  const [checkedItemsLength, setCheckedItemsLength] = useState(0);
  const selectEl = useRef(null);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleToggle = useCallback(({ target }) => {
    if (!isOpenList && selectEl.current.contains(target)) {
      setIsOpenList(true);
    } else {
      setIsOpenList(false);
    }
  });

  const handleChecked = (name) => {
    dispatch(getCardLists(resetCardLists));
    if (checkedItems.includes(name)) {
      dispatch(removeCheckedItem(name));
    } else {
      dispatch(addCheckedItem(name));
    }
  };

  useEffect(() => {
    if (checkedItems.length !== 0 && cardLists.length !== 0) {
      const filteredList = cardLists.filter((card) => {
        return checkedItems.every((i) => {
          return card.material.concat(card.method).includes(i);
        });
      });
      dispatch(getCardLists(filteredList));
    }
    let checkedLength = list.filter((a) => {
      return checkedItems
        .map((b) => {
          return a === b;
        })
        .includes(true);
    }).length;
    setCheckedItemsLength(checkedLength);
    // filter된 list를 반환하기 위한 코드
    // deps에 cardLists를 넣으면 callStack이 계속 차버리는 문제가 있음
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedItems, dispatch]);

  useEffect(() => {
    // 외부 클릭시 닫히게
    window.addEventListener("click", handleToggle);
    return () => {
      window.removeEventListener("click", handleToggle);
    };
  }, [handleToggle]);

  return (
    <Wrap ref={selectEl} checkedItemsLength={checkedItemsLength}>
      <div className="label" onClick={handleToggle}>
        {title} {checkedItemsLength > 0 ? `(${checkedItemsLength})` : ""}
        <AiFillCaretDown />
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
  padding: 5px;
  .label {
    position: relative;
    user-select: none;
    align-items: center;
    font-size: 12px;
    color: ${({ theme, checkedItemsLength }) =>
      checkedItemsLength ? "white" : theme.colors.Gray900};
    border: 1px solid #939fa5;
    border-radius: 4px;
    background: ${({ theme, checkedItemsLength }) =>
      checkedItemsLength ? theme.colors.Primary700 : "white"};
    cursor: pointer;
    padding: 9px 12px;
    padding-right: 24px;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.Primary500};
    }
    > svg {
      position: absolute;
      right: 8px;
      margin-left: 12px;
      color: ${({ checkedItemsLength }) =>
        checkedItemsLength ? "white" : "#939fa5"};
    }
  }
  .itemList {
    position: absolute;
    top: 40px;
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
        user-select: none;
        input {
          margin: 0;
        }
        span {
          padding-left: 5px;
        }
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    .label {
    }
  }
`;

export default Select;
