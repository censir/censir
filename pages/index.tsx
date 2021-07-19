import { Logo, Inputs, Pill, PopularCities } from "@/components/index";
import styled from "styled-components";

export default function Home(): JSX.Element {
  return (
    <Main>
      <LeftContainer>
        <Logo />
        <InputContainer>
          <Pill />
          <Title>Check the weather</Title>
          <Inputs />
        </InputContainer>
      </LeftContainer>
      <RightContainer>
        <PopularCities />
      </RightContainer>
    </Main>
  );
}

const Main = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
  margin-left: 20px;
  font-weight: 300;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vw;
`;

const RightContainer = styled.div``;

const InputContainer = styled.div`
  display: flex;
  height: 100%;
  margin-top: -100px;
  flex-direction: column;
  justify-content: center;
`;
