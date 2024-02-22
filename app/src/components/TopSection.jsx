import React from "react";
import styled from "styled-components";

const TopSection = ({ onPress, onSearch }) => {
  return (
    <Navbar>
      <img src="src/assets/Foody Zone.svg"></img>
      <Category>
        <Button onClick={onPress}>All</Button>
        <Button onClick={onPress}>Breakfast</Button>
        <Button onClick={onPress}>Lunch</Button>
        <Button onClick={onPress}>Dinner</Button>
      </Category>
      <Search
        onChange={onSearch}
        type="text"
        placeholder="Search Food..."
      ></Search>
    </Navbar>
  );
};

export default TopSection;

const Navbar = styled.div`
  width: 100%;
  height: 200px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
  background-color: #323334;

  @media only screen and (max-width: 880px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    z-index: 2;
  }

  @media only screen and (max-height: 600px) {
    height: 80px;
  }
`;
const Category = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 20px 0;

  @media only screen and (max-width: 880px) {
    height: 30px;
    padding-bottom: 0;
    order: 3;
  }
  @media only screen and (max-height: 600px) {
    height: 70px;
  }
`;

const Button = styled.button`
  width: fit-content;
  height: 30px;
  padding: 0 10px;
  background-color: #ff4343;
  border-radius: 5px;
  margin: 0 10px;
  border: none;
  color: white;
  text-align: center;
`;

const Search = styled.input`
  width: 200px;
  height: 30px;
  background-color: transparent;
  border: 2px solid red;
  color: white;
  outline: #ff4343;
  padding: 10px;
  border-radius: 5px;
`;
