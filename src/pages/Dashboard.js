import React, { useState } from "react";
import CardList from "components/organisms/CardList";
import Card from "components/molecules/Card";
import Select from "components/atoms/Select";
import styled from "styled-components";

const Dashboard = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  return (
    <Wrap>
      <div className="esWrap">
        <div className="intro">
          <h2>들어온 요청</h2>
          <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
          <div>
            <Select title="가공방식" list={["밀링", "선반"]} />
            <Select
              title="재료"
              list={["밀링", "선반"]}
              checkedList={checkedItems}
            />
          </div>
        </div>
        <CardList>
          <Card
            title={"자동차 시제품 제작"}
            client={"A고객사"}
            due={"2020.12.14"}
            count={2}
            amount={100}
            method={["밀링", "선반"]}
            material={["알루미늄"]}
            status={"대기중"}
          />
          <Card
            title={"자동차 시제품 제작"}
            client={"A고객사"}
            due={"2020.12.14"}
            count={2}
            amount={100}
            method={["밀링", "선반"]}
            material={["알루미늄"]}
            status={"상담중"}
          />
          <Card
            title={"자동차 시제품 제작"}
            client={"A고객사"}
            due={"2020.12.14"}
            count={2}
            amount={100}
            method={["밀링", "선반"]}
            material={["알루미늄"]}
            status={"대기중"}
          />
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
  @media ${({ theme }) => theme.mobile} {
    .intro {
      width: 100%;
      padding: 0 30px;
    }
  }
`;

export default Dashboard;
