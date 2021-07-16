import { GetCoords } from "@/utils/getCoords";
import { useGetPill } from "@/utils/useGetPill";
import styled from "styled-components";

export const Pill = (): JSX.Element => {
  const { latitude: lat, longitude: lon } = GetCoords();
  const { weather, isLoading, isError } = useGetPill(lat, lon);

  if (isLoading) console.log("loading");

  return (
    <div>
      {isError ? (
        <h1>An error occurred!</h1>
      ) : !isLoading && weather ? (
        <PillContainer>
          <LeftSide>
            <MainTemperature>{weather.main.temp}</MainTemperature>
            <MinMaxTemperature>
              {weather.main.temp_min}/{weather.main.temp_max}
            </MinMaxTemperature>
            <WeatherDescription>
              {weather.weather[0].description}
            </WeatherDescription>
            <WeatherLocation>
              {weather.name}, {weather.sys.country}
            </WeatherLocation>
          </LeftSide>
          <RightSide>
            <WeatherIcon src='/img/logo.svg' draggable={false} />
            <ViewMore href='https://looskie.com/'>View more</ViewMore>
          </RightSide>
        </PillContainer>
      ) : (
        <PillContainer>Loading...</PillContainer>
      )}
    </div>
  );
};

const PillContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 450px;
  border-radius: 16px;
  margin-left: 20px;
  padding: 16px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 1px -1px 12px rgb(0 0 0 / 37%);
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
`;

const MainTemperature = styled.h1`
  padding: 0;
  margin: 0;
`;

const MinMaxTemperature = styled.span`
  padding: 0;
  margin: 0;
`;

const WeatherDescription = styled.p`
  padding: 0;
  margin: 0;
`;
const WeatherLocation = styled.p`
  margin: 0;
  padding: 0;
`;

const WeatherIcon = styled.img`
  width: 120px;
  height: auto;
`;

const ViewMore = styled.a`
  position: absolute;
  bottom 16px;
`;
