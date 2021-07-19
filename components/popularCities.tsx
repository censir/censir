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
  max-width: 500px;
`;

const CityContainer = styled.div`
  width: 250px;
  height: 150px;
  background: ${(props) => props.theme.colors.secondary};
`;
