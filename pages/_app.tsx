import type { AppProps } from "next/app";
import { Theme } from "../layouts/Theme";
import { createGlobalStyle } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";

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
      <SkeletonTheme color='#0D131A' highlightColor='#202A34'>
        <Component {...pageProps} />
      </SkeletonTheme>
    </Theme>
  );
}
export default MyApp;
