import styled from "styled-components";

export const Inputs = (): JSX.Element => {
  return (
    <div>
      <Input placeholder='Enter city' />
      <Input placeholder='Enter country' />
      <Button>test</Button>
    </div>
  );
};

const Input = styled.input`
  display: block;
  margin-left: 20px;
  border-radius: 10px;
  margin-top: 20px;
  min-width: 230px;
  max-width: 300px;
  width: 80%;
  padding: 13px 15px;
  font-size: ${(props) => props.theme.fontSizes.small};
  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColor};
  filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.23));

  &:first-child {
    margin-top: 0;
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

const Button = styled.button`
  position: absolute;
`;
