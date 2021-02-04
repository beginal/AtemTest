import React, { useEffect } from "react";
import CardList from "components/organisms/CardList";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCardLists, backUpCardLists } from "reducer/DashboardReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { cardLists, checkedItems } = useSelector(
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

  const methodCategory = ["밀링", "선반"];
  const materialCategory = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

  return (
    <Wrap>
      <div className="container">
        {/* class명 바꾸기 */}
        <div className="intro">
          <h2>들어온 요청</h2>
          <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
        </div>
        <CardList
          list={cardLists}
          methodCategory={methodCategory}
          materialCategory={materialCategory}
        />
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }
  .intro {
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    /* max-width: 1200px; */
    margin: 20px 0;
    h2 {
      font-size: 20px;
      font-weight: 700;
      padding: 10px 0;
    }
    p {
      padding: 10px 0;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    .intro {
      width: 100%;
    }
  }
`;

export default Dashboard;
