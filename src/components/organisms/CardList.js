import React, { useState } from "react";
import styled from "styled-components";
import Card from "components/molecules/Card";
import Select from "components/atoms/Select";
import { useDispatch, useSelector } from "react-redux";
import { getCardLists, resetCheckedItem } from "reducer/DashboardReducer";
import Switch from "components/atoms/Switch";

const CardList = ({ list, methodCategory, materialCategory }) => {
  const dispatch = useDispatch();
  const [isAdviceToggle, setIsAdviceToggle] = useState(false);
  const { cardLists, resetCardLists, checkedItems } = useSelector(
    (store) => store.DashboardReducer
  );

  const filterReset = () => {
    dispatch(getCardLists(resetCardLists));
    dispatch(resetCheckedItem());
  };

  const handleToggleAdviceList = () => {
    setIsAdviceToggle((props) => !props);
    if (!isAdviceToggle) {
      const filteredList = cardLists.filter((card) => {
        return card.status === "상담중";
      });
      dispatch(getCardLists(filteredList));
    } else {
      dispatch(getCardLists(resetCardLists));
    }
  };

  return (
    <Wrap>
      <div className="filterList">
        <div className="leftFilter">
          <Select title="가공방식" list={methodCategory} />
          <Select title="재료" list={materialCategory} />
          {checkedItems.length !== 0 && (
            <span onClick={filterReset}>
              <img src="images/refresh.png" alt="reset" />
              필터링 리셋
            </span>
          )}
        </div>
        <div className="rightFilter">
          <Switch
            switchToggle={handleToggleAdviceList}
            text="상담중인 요청만 보기"
            isToggle={isAdviceToggle}
          />
        </div>
      </div>
      <div className="cardLists">
        {list.length !== 0 ? (
          list.map(
            (
              { title, client, due, count, amount, method, material, status },
              i
            ) => (
              <Card
                key={i}
                title={title}
                client={client}
                due={due}
                count={count}
                amount={amount}
                method={method}
                material={material}
                status={status}
              />
            )
          )
        ) : (
          <div className="notFoundData">조건에 맞는 견적 요청이 없습니다.</div>
        )}
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .filterList {
    display: flex;
    justify-content: space-between;
    .leftFilter {
      > div {
        &:first-of-type {
          padding-left: 0;
        }
      }
      display: flex;
      align-items: center;
      > span {
        display: flex;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        padding: 0 10px;
        img {
          margin-right: 5px;
          width: 12px;
          height: 12px;
        }
      }
    }
    .rightFilter {
      display: flex;
      font-size: 14px;
      font-weight: 500;
      padding: 5px;
    }
  }
  .cardLists {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
  .notFoundData {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.Gray600};
    border: 1px solid #c2c2c2;
    margin-top: 20px;
    width: 100%;
    height: 100px;
  }
  @media ${({ theme }) => theme.mobile} {
    justify-content: center;
    .filterList {
      flex-direction: column;
      .rightFilter {
        margin: 15px 0;
      }
    }
    .notFoundData {
      width: 100%;
    }
  }
`;

export default CardList;
