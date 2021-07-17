import { SeperatorProps } from "@/types/types";
import styled from "styled-components";

export const Seperator = ({ color }: SeperatorProps): JSX.Element => {
  const Line = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin: -3px 8px 0;
    border-left: 2px solid ${color};
    height: 12px;
  `;

  return <Line />;
};
