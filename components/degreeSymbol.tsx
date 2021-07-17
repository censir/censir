import { DegreeSymbolProps } from "@/types/types";
import styled from "styled-components";

export const DegreeSymbol = ({
  celsius,
  size,
}: DegreeSymbolProps): JSX.Element => {
  const Symbol = styled.span`
    display: inline-block;
    vertical-align: text-top;
    margin: 1px 0 0 3px;
    font-size: ${size};
    color: ${(props) => props.theme.colors.darkTextColor};
  `;

  return <Symbol>°{celsius ? "C" : "F"}</Symbol>;
};
