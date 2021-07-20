import { useGetPopularCities } from "@/utils/useGetPopularCities";
import { Seperator, DegreeSymbol } from "@/components/index";
import { CurrentResponse } from "openweathermap-ts/dist/types";
import styled from "styled-components";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import Skeleton from "react-loading-skeleton";

export const PopularCities = (): JSX.Element => {
  const { weather, isError } = useGetPopularCities();

  return (
    <PopularCitiesContainer>
      {weather ? (
        <>
          {weather.popularCityWeather.list.map(
            (weather: CurrentResponse, i: number) => {
              return (
                <CityContainer key={i}>
                  <LeftSide>
                    <MainTemperature>
                      {weather.main.temp.toFixed(0)}
                      <DegreeSymbol celsius={false} size={"23px"} />
                    </MainTemperature>
                    <MinMaxTemperature>
                      {weather.main.temp_min.toFixed(0)}
                      <DegreeSymbol celsius={false} size={"13px"} />
                      <Seperator
                        color={(props: any) => props.theme.colors.primary}
                      />
                      {weather.main.temp_max.toFixed(0)}
                      <DegreeSymbol celsius={false} size={"13px"} />
                    </MinMaxTemperature>
                    <WeatherDescription>
                      {weather.weather[0].description}
                    </WeatherDescription>
                    <WeatherLocation>
                      {weather.name + ", " + weather.sys.country}
                    </WeatherLocation>
                  </LeftSide>
                  <WeatherIcon
                    src={getWeatherIcon(weather.weather[0].id)}
                    draggable={false}
                  />
                </CityContainer>
              );
            }
          )}
        </>
      ) : (
        <>
          {[...Array(4)].map((_e, i) => (
            <LoadingCityContainer key={i}>
              <MainTemperature>
                <Skeleton duration={1} width={50} height={35} />
              </MainTemperature>
              <MinMaxTemperature>
                <Skeleton duration={1} width={40} height={20} />
              </MinMaxTemperature>
              <WeatherDescription>
                <Skeleton duration={1} width={165} height={22} />
              </WeatherDescription>
              <WeatherLocation>
                <>
                  <Skeleton duration={1} width={155} height={22} />
                  <Skeleton
                    style={{ marginLeft: 10 }}
                    duration={1}
                    width={30}
                    height={22}
                  />
                </>
              </WeatherLocation>
              <LoadingWeatherIcon />
            </LoadingCityContainer>
          ))}
        </>
      )}
    </PopularCitiesContainer>
  );
};

const PopularCitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 680px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoadingCityContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 150px;
  margin: 15px 15px;
  border-radius: 20px;
  padding: 15px 20px;
  background: ${(props) => props.theme.colors.thirdary};
  box-shadow: ${(props) => props.theme.shadows.normalShadow};
`;

const CityContainer = styled.div`
  position: relative;
  display: flex;
  width: 250px;
  height: 150px;
  margin: 15px 15px;
  border-radius: 20px;
  padding: 15px 20px;
  background: ${(props) => props.theme.colors.thirdary};
  box-shadow: ${(props) => props.theme.shadows.normalShadow};
`;

const MainTemperature = styled.h1`
  padding: 0;
  font-size: 2.15em;
  margin: 0;
  color: ${(props) => props.theme.colors.textColor};
  font-weight: normal;
`;

const MinMaxTemperature = styled.span`
  padding: 0;
  margin: -10px 0 0 0;
  font-size: 1.15em;
  flex-grow: 1;
  color: ${(props) => props.theme.colors.textColor};
`;

const WeatherDescription = styled.p`
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.textColor};
`;
const WeatherLocation = styled.p`
  margin: -5px 0 0 0;
  padding: 0;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.darkTextColor};
`;

const WeatherIcon = styled.img`
  position: absolute;
  right: 15px;
  width: auto;
  height: 90px;
`;

const LoadingWeatherIcon = styled(Skeleton)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 120px !important;
  height: 90px;
`;
