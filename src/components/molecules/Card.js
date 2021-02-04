import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Label from "components/atoms/Label";

const Card = (props) => {
  const { title, client, due, count, amount, method, material, status } = props;
  const descriptionItem = [
    { name: "도면갯수", value: `${count}개` },
    { name: "총 수량", value: `${amount}개` },
    { name: "가공방식", value: method.join(", ") },
    { name: "재료", value: material.join(", ") },
  ];
  return (
    <Wrap>
      {status === "상담중" && <Label children={"상담중"} />}
      <div className="info">
        <h2>{title}</h2>
        <p>{client}</p>
        <span>{due}까지 납기</span>
      </div>
      <div className="description">
        <ul>
          {descriptionItem.map(({ name, value }, i) => (
            <li key={i}>
              <span>{name}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>

        <div className="btnList">
          <Button primary>요청 내역 보기</Button>
          <Button>채팅하기</Button>
        </div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  flex-direction: column;
  text-align: left;
  margin: 10px;
  padding: 16px;
  width: 366px;
  min-width: 366px;
  height: 356px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  transition: border 0.5;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.Primary500};
  }
  .info {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 16px;
    font-size: 14px;
    line-height: 20px;
    > h2 {
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      margin: 4px 0;
    }
    > p {
      margin-bottom: 24px;
    }
    > span {
      color: ${({ theme }) => theme.colors.Gray600};
    }
  }
  .description {
    ul {
      padding: 15px 0;
      li {
        display: flex;
        font-size: 14px;
        line-height: 20px;
        padding: 4px 0;
        span {
          &:first-of-type {
            display: block;
            min-width: 70px;
          }
          &:last-of-type {
            font-weight: bold;
          }
        }
      }
    }
  }
  .btnList {
    > button {
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
  @media ${({ theme }) => theme.mobile} {
    width: 320px;
    min-width: 320px;
    height: 344px;
  }
`;

export default Card;
