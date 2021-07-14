import { Logo, Inputs } from "../components";
import styled from "styled-components";

// @ts-expect-error Types :(
import { useIpCoords } from "use-ipcoords";
import { useGetPill } from "../utils/useGetPill";

export default function Home(): JSX.Element {
  const { latitudeIp: lat, longitudeIp: lon } = useIpCoords();

  const { weather, isLoading, isError } = useGetPill(lat, lon);

  if (isLoading) console.log("loading");
  if (isError) console.log("loading");

  console.log(weather);
  return (
    <div>
      <LeftContainer>
        <Logo />
        <InputContainer>
          {isError ? (
            <h1>An error occurred!</h1>
          ) : !isLoading && weather ? (
            <span>{weather.cod}</span>
          ) : (
            <span>Loading...</span>
          )}
          <Title>Check the weather</Title>
          <Inputs />
        </InputContainer>
      </LeftContainer>
    </div>
  );
}

const Title = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
  margin-left: 20px;
  font-weight: 300;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const InputContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
