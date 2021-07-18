import { GetCoords } from "@/utils/getCoords";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import { useGetPill } from "@/utils/useGetPill";
import { Button, Seperator, DegreeSymbol } from "@/components/index";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const Pill = (): JSX.Element => {
  const { latitude: lat, longitude: lon } = GetCoords();
  const { weather, isError } = useGetPill(lat, lon);

  return (
    <div>
      {isError ? "An error occurred" : null}
      <PillContainer>
        <LeftSide>
          <MainTemperature>
            {weather ? (
              <>
                {weather.main.temp.toFixed(0)}
                <DegreeSymbol celsius={false} size={"23px"} />
              </>
            ) : (
              <Skeleton duration={1} width={50} height={35} />
            )}
          </MainTemperature>
          <MinMaxTemperature>
            {weather ? (
              <>
                {weather.main.temp_min.toFixed(0)}
                <DegreeSymbol celsius={false} size={"13px"} />
                <Seperator
                  color={(props: any) => props.theme.colors.secondary}
                />
                {weather.main.temp_max.toFixed(0)}
                <DegreeSymbol celsius={false} size={"13px"} />
              </>
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
          <ViewMoreLink href='looskie.com'>
            {weather ? (
              <Button text='View more' />
            ) : (
              <Skeleton width={140} height={35} />
            )}
          </ViewMoreLink>
        </RightSide>
      </PillContainer>
    </div>
  );
};

const PillContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 420px;
  min-height: 150px;
  border-radius: 18px;
  margin-left: 20px;
  padding: 13px 18px;
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
  margin: -5px 0 0 0;
  padding: 0;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.darkTextColor};
`;

const WeatherIcon = styled.img`
  width: auto;
  height: 90px;
`;

const ViewMoreLink = styled.a`
  position: absolute;
  bottom: 16px;
`;
