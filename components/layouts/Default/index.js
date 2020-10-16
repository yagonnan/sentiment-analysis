import { Box } from "@chakra-ui/core";
import Header from "./Header";

function DefaultLayout({ children }) {
  return (
    <Box w="100%" color="black">
      <Header />
      {children}
    </Box>
  );
}

export default DefaultLayout;
