import Link from "next/link";
import styled from "styled-components";

export const Logo = (): JSX.Element => {
  return (
    <Link passHref={true} href='/'>
      <Image src='/img/logo.svg' alt='CENSIR logo' draggable={false} />
    </Link>
  );
};

const Image = styled.img`
  margin: 20px 20px 0;
  width: 125px;
  height: auto;
  cursor: pointer;
`;
