import React, { useState, useEffect, useCallback } from "react";
import CardList from "components/organisms/CardList";
import Card from "components/molecules/Card";
import Select from "components/atoms/Select";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCardLists, backUpCardLists } from "reducer/DashboardReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [isAdviceToggle, setIsAdviceToggle] = useState(true);
  const { cardLists, resetCardLists, checkedItems } = useSelector(
    (store) => store.DashboardReducer
  );

  useEffect(() => {
    (async function () {
      const res = await axios.get("http://localhost:4000/requests");
      const data = await res.data;
      if (checkedItems.length === 0) {
        dispatch(getCardLists(data));
        dispatch(backUpCardLists(data));
      }
    })();
  }, [checkedItems, dispatch]);

  const filterReset = () => {
    dispatch(dispatch(getCardLists(resetCardLists)));
  };

  const handleToggleAdviceList = () => {
    setIsAdviceToggle((props) => !props);
    if (isAdviceToggle) {
      const filteredList = cardLists.filter((card) => {
        return card.status === "상담중";
      });
      dispatch(getCardLists(filteredList));
    } else {
      dispatch(getCardLists((prev) => prev));
    }
  };

  const methodCategory = ["밀링", "선반"];
  const materialCategory = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

  return (
    <Wrap>
      <div className="esWrap">
        {/* class명 바꾸기 */}
        <div className="intro">
          <h2>들어온 요청</h2>
          <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
          <div>
            <Select title="가공방식" list={methodCategory} />
            <Select title="재료" list={materialCategory} />
            <span onClick={filterReset}>
              <img className="refresh" src="images/refresh.png" alt="reset" />
              필터링 리셋
            </span>
          </div>
          <div onClick={handleToggleAdviceList}>상담중인 요청만 보기</div>
        </div>
        <CardList>
          {cardLists.length !== 0 ? (
            cardLists.map(
              ({
                title,
                client,
                due,
                count,
                amount,
                method,
                material,
                status,
              }) => (
                <Card
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
            <div>조건에 맞는 견적 요청이 없습니다.</div>
          )}
        </CardList>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .esWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .intro {
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 20px 0;
    padding: 0 10px;
    h2 {
      font-size: 20px;
      font-weight: 700;
      padding: 10px 0;
    }
    p {
      padding: 10px 0;
      margin-bottom: 30px;
    }
  }
  .refresh {
    width: 15px;
  }
  @media ${({ theme }) => theme.mobile} {
    .intro {
      width: 100%;
      padding: 0 30px;
    }
  }
`;

export default Dashboard;
