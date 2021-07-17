import styled from "styled-components";
import { ArrowRight } from "react-feather";

export const Button = ({ text }: any): JSX.Element => {
  return (
    <StyledButton>
      <I>{text}</I> <Arrow size={22} />
    </StyledButton>
  );
};

const Arrow = styled(ArrowRight)`
  &&& {
    vertical-align: middle;
    color: ${(props) => props.theme.colors.accent};
    transition: ${(props) => props.theme.transitions.easeInOut};
    will-change: transform;
  }
`;

const StyledButton = styled.button`
  border-radius: 10px;
  padding: 6px 12px;
  cursor: pointer;
  border: none;
  font-size: 0.95em;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.darkTextColor};
  background: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.shadows.subtleShadow};
  transition: ${(props) => props.theme.transitions.easeInOut};

  &:hover {
    color: ${(props) => props.theme.colors.textColor};
    box-shadow: ${(props) => props.theme.shadows.normalShadow};
  }

  &:hover ${Arrow} {
    transform: translateX(3px);
  }
`;

const I = styled.span`
  font-style: unset;
  font-weight: 500;
  margin-right: 8px;
  margin-left: 2px;
`;
