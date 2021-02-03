import React from "react";
import CardList from "components/organisms/CardList";
import Card from "components/molecules/Card";

const Dashboard = () => {
  return (
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
        status={"대기중"}
      />
    </CardList>
  );
};

export default Dashboard;
