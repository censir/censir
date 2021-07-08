import { Logo } from "../components";
import styled from "styled-components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Logo />
      <SomeComp>test</SomeComp>
    </div>
  );
}

const SomeComp = styled.h1`
  colors: ${(props) => props.theme.colors.primary};
`;
