import styled from "styled-components";
import Link from "next/link";
import { Button } from "./coolButton";
import { useState } from "react";

export const Inputs = (): JSX.Element => {
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  return (
    <InputContainer>
      <Input
        onChange={({ target }) => setCity(target.value)}
        placeholder='Enter city'
      />
      <Input
        onChange={({ target }) => setCountry(target.value)}
        placeholder='Enter country'
      />
      <Link
        passHref={true}
        href={city && country ? `/${city}/${country}` : "/"}
      >
        <GoButton text='Go' />
      </Link>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  max-width: 350px;
`;

const Input = styled.input`
  display: block;
  margin-left: 20px;
  margin-bottom: 0;
  border-radius: 14px;
  margin-top: 20px;
  min-width: 300px;
  width: 100%;
  padding: 15px 14px;
  font-size: ${(props) => props.theme.fontSizes.small};
  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  text-align: left;
  filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.23));

  &:first-child {
    margin-top: 0;
  }

  &::placeholder {
    font-size: 1.1em;
    opacity: 0.5;
  }

  &:focus {
    outline: 0;
  }
`;

const GoButton = styled(Button)`
  position: absolute;
  right: -38px;
  margin-top: -41.5px;
`;
