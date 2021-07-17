import styled from "styled-components";

export const Button = ({ text }: any): JSX.Element => {
  console.log(text);
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  border-radius: 10px;
  padding: 10px 12px;
  pointer: cursor;
  border: none;
  font-size: 1em;
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkTextColor};
  background: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.shadows.normalShadow};
`;
