import styled from "styled-components";
import { Button } from "./coolButton";

export const Inputs = (): JSX.Element => {
  return (
    <InputContainer>
      <Input placeholder='Enter city' />
      <Input placeholder='Enter country' />
      <GoButton text='Go' />
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
  margin-top: -41px;
`;
