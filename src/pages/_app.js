import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import theme from "../theme";
import { ProvideAuth } from "hooks/useAuth";

function MyApp({ Component, pageProps, user }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ProvideAuth user={user}>
          <Component {...pageProps} user={user} />
        </ProvideAuth>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = ({ ctx }) => {
  const { user } = ctx.req;
  console.log(user);
  return { user };
};

export default MyApp;
