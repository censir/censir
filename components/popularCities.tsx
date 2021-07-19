import styled from "styled-components";

export const PopularCities = (): JSX.Element => {
  return (
    <PopularCitiesContainer>
      <CityContainer></CityContainer>
      <CityContainer></CityContainer>
      <CityContainer></CityContainer>
      <CityContainer></CityContainer>
    </PopularCitiesContainer>
  );
};

const PopularCitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 600px;
`;

const CityContainer = styled.div`
  width: 250px;
  height: 150px;
  margin: 20px 25px;
  background: ${(props) => props.theme.colors.secondary};
`;
