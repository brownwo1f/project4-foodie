import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../App";

const FoodCards = ({ dataBackend: food }) => {
  return (
    <Container>
      {food?.map((item) => (
        <Card key={item.name}>
          <img src={BASE_URL + item.image}></img>
          <div className="info">
            <h4>{item.name}</h4>
            <p>{item.text}</p>
            <Button>${item.price}.00</Button>
          </div>
        </Card>
      ))}
    </Container>
  );
};
export default FoodCards;

const Container = styled.div`
  width: 1060px;
  height: 366px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Card = styled.div`
  width: 340px;
  height: 167px;
  background: rgba(250, 250, 255, 0.06);
  margin: 5px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 1px ridge rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 3px 0 white inset;
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);

  .info h4 {
    padding-left: 5px;
  }
  .info p {
    font-size: 12px;
    margin: 10px 4px;
    padding-bottom: 25px;
  }

  @media only screen and (max-width: 1050px) {
    width: 45%;
    min-width: 340px;
    height: 167px;
  }
`;

const Button = styled.button`
  width: fit-content;
  height: 27px;
  padding: 0 10px;
  background-color: #ff4343;
  border-radius: 5px;
  margin-left: 100px;
  border: none;
  color: white;
  text-align: center;
`;
