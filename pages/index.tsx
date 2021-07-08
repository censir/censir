import { Logo } from "../components";
import styled from "styled-components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Logo />
      <Title>test</Title>
    </div>
  );
}

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;
