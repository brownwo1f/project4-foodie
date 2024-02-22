import React, { useEffect, useState } from "react";
import TopSection from "./components/TopSection";
import styled from "styled-components";
import FoodCards from "./components/FoodCards";

export const BASE_URL = "http://localhost:9000"; // url of our backend server // exported to be used in other components

const App = () => {
  const [dataBackend, setDataBackend] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true); // showing loading until our data is fetched from server
      try {
        const response = await fetch(BASE_URL); //calling server using fetch api
        const datajson = await response.json(); //converting received data into json format
        setDataBackend(datajson);
        setFilterData(datajson);
        setLoading(false); //stop showing loading when we got data
      } catch (error) {
        setError("Unable to fetch data from server, Please try again later"); //setting error
      }
    };
    fetchFoodData();
  }, []); //array is empty means useEffect will run only once

  //fetchFoodData(); //will throw an error of too many reloadings use useEffect hook

  const searchFood = (e) => {
    if (e.target.innerText === "") {
      const searchValue = e.target.value;
      if (searchValue === "") {
        setFilterData(dataBackend);
      }
      setFilterData(
        dataBackend?.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (
      e.target.innerText === "Breakfast" ||
      e.target.innerText === "Lunch" ||
      e.target.innerText === "Dinner"
    ) {
      setFilterData(
        dataBackend?.filter(
          (item) => e.target.innerText.toLowerCase() === item.type
        )
      );
    } else if (e.target.innerText === "All") {
      setFilterData(dataBackend);
    }
  };

  if (error) {
    return <div>{error}</div>; //showing error if any
  }
  if (loading) {
    return <div>loading...</div>; //showing error if any
  }
  return (
    <div>
      <TopSection onPress={searchFood} onSearch={searchFood} />
      <MainSection>
        <FoodCards dataBackend={filterData} />
      </MainSection>
    </div>
  );
};

export default App;

const MainSection = styled.section`
  height: calc(100vh - 200px);
  background-image: url("src/assets/bg.png");
  background-size: cover;
  background-repeat: repeat-y;
  display: flex;
  justify-content: center;

  @media only screen and (max-height: 600px) {
    height: 100vh;
  }

  @media only screen and (max-width: 1050px) {
    overflow-y: scroll;
  }
`;
