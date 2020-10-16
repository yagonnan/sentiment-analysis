import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
          <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = ({ ctx }) => {
  // const { user } = ctx.req;
  return {};
};

export default MyApp;
