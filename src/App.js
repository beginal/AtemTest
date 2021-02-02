import React from "react";
import styled from "styled-components";
import Header from "components/organisms/Header";
import Dashboard from "pages/Dashboard";

const App = () => {
  return (
    <Wrap>
      <Header />
      <Dashboard />
    </Wrap>
  );
};

const Wrap = styled.div``;

export default App;
