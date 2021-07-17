import { GetCoords } from "@/utils/getCoords";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import { useGetPill } from "@/utils/useGetPill";
import { Button } from "@/components/index";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const Pill = (): JSX.Element => {
  const { latitude: lat, longitude: lon } = GetCoords();
  const { weather, isLoading, isError } = useGetPill(lat, lon);

  if (isLoading) console.log("loading");

  console.log(weather);

  return (
    <div>
      {isError ? (
        <h1>An error occurred!</h1>
      ) : (
        <PillContainer>
          <LeftSide>
            <MainTemperature>
              {weather ? (
                weather.main.temp.toFixed(0)
              ) : (
                <Skeleton duration={1} width={50} height={35} />
              )}
            </MainTemperature>
            <MinMaxTemperature>
              {weather ? (
                weather.main.temp_min.toFixed(0) +
                "/" +
                weather.main.temp_max.toFixed(0)
              ) : (
                <Skeleton duration={1} width={40} height={20} />
              )}
            </MinMaxTemperature>
            <WeatherDescription>
              {weather ? (
                weather.weather[0].description
              ) : (
                <Skeleton duration={1} width={165} height={22} />
              )}
            </WeatherDescription>
            <WeatherLocation>
              {weather ? (
                weather.name + ", " + weather.sys.country
              ) : (
                <>
                  <Skeleton duration={1} width={155} height={22} />
                  <Skeleton
                    style={{ marginLeft: 10 }}
                    duration={1}
                    width={30}
                    height={22}
                  />
                </>
              )}
            </WeatherLocation>
          </LeftSide>
          <RightSide>
            {weather ? (
              <WeatherIcon
                src={getWeatherIcon(weather.weather[0].id)}
                draggable={false}
              />
            ) : (
              <Skeleton duration={1} width={120} height={90} />
            )}
            <Button text='View more' />
          </RightSide>
        </PillContainer>
      )}
    </div>
  );
};

const PillContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 420px;
  min-height: 145px;
  border-radius: 18px;
  margin-left: 20px;
  padding: 14px 18px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  box-shadow: ${(props) => props.theme.shadows.normalShadow};
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
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
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.darkTextColor};
`;

const WeatherIcon = styled.img`
  width: 120px;
  height: auto;
`;

const ViewMore = styled.a`
  position: absolute;
  bottom 8px;
`;
