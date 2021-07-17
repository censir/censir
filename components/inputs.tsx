import styled from "styled-components";
import { ArrowRight } from "react-feather";

export const Inputs = (): JSX.Element => {
  return (
    <InputContainer>
      <Input placeholder='Enter city' />
      <Input placeholder='Enter country' />
      <Button>
        <ArrowRight />
      </Button>
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
  border-radius: 25px;
  margin-top: 20px;
  min-width: 300px;
  width: 100%;
  padding: 13px 0px;
  font-size: ${(props) => props.theme.fontSizes.small};
  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.23));

  &:first-child {
    margin-top: 0;
  }

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  position: absolute;
  right: -20px;
  border-radius: 50%;
  margin-top: -44px;
  color: ${(props) => props.theme.colors.textColor};
  padding: 11px;
  cursor: pointer;
  border: none;
  background: #182430;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
