import type { AppProps } from "next/app";
import { Theme } from "../layouts/Theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
export default MyApp;
