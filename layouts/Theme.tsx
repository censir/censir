import { ThemeProvider } from "styled-components";
import { light, dark, midnight } from "../utils/theme";

export const Theme = ({ children }: any): JSX.Element => {
  return <ThemeProvider theme={midnight}>{children}</ThemeProvider>;
};
