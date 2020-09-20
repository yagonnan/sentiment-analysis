import DefaultLayout from "layouts/Default";
import { Box } from "@chakra-ui/core";

function Home({ user }) {
  return (
    <DefaultLayout>
      <Box>This is Home Page Content</Box>
    </DefaultLayout>
  );
}

// Home.getInitialProps = ({ req }) => {
//   console.log("----commeee");
//   if (req.user) {
//     return {
//       user: req.user,
//     };
//   }
//   return {};
// };

export default Home;
