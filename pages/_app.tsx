import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { dark } from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
