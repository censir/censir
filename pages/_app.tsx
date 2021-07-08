import type { AppProps } from "next/app";
import { Theme } from "../layouts/Theme";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    font-family: Poppins, sans-serif;
    background: ${(props: any) =>
      props.theme.colors.primary} url(./img/cloud.svg) no-repeat top left;
  }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Theme>
      <Global />
      <Component {...pageProps} />
    </Theme>
  );
}
export default MyApp;
