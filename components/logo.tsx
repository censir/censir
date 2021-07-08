import styled from "styled-components";

export const Logo = (): JSX.Element => {
  return <Image src='/img/logo.svg' alt='CENSIR logo' draggable={false} />;
};

const Image = styled.img`
  margin: 20px 20px 0;
  width: 125px;
  height: auto;
`;
