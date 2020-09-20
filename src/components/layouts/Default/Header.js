import { Box, Flex, Text, Icon, Link, Image } from "@chakra-ui/core";
import { useAuth } from "hooks/useAuth";

const sanitizeUserResponse = ({ auth }) => {
  if (auth?.user) {
    const { user } = auth;

    if (user.provider === "line") {
      user.profile = user.pictureUrl;
    } else {
      user.profile = user.photos ? user.photos[0].value : null;
    }

    return auth;
  }

  return auth;
};

function Header() {
  const auth = useAuth();
  const user = sanitizeUserResponse({ auth });

  const handleFbSignOut = async () => {
    await auth.signout();
  };

  return (
    <Box bg="black" w="100%" p={4} color="white" maxH="100px">
      <Flex align="center" flexGrow={1}>
        <Flex>
          <Text>Logo</Text>
        </Flex>
        <Flex flexGrow={12} align="center" justify="center">
          Menu Item
        </Flex>
        {auth?.user && (
          <Flex>
            <Text pr={5}>Hello {auth.user.displayName}</Text>
            <Image
              alt="Profile"
              rounded="full"
              size="25px"
              src={auth.user.profile}
            ></Image>
            <Link key="sign-out" onClick={handleFbSignOut} pl={5}>
              Sign Out
            </Link>
          </Flex>
        )}
        {!auth?.user && (
          <Flex justify="flex-end" justifyContent="space-around" flexGrow={1}>
            <Link href="/auth/facebook">
              <Icon name="phone" />
            </Link>
            <Link href="/auth/google">
              <Icon name="phone" />
            </Link>
            <Link href="/auth/line">
              <Icon name="phone" />
            </Link>
            <Link>Sign up</Link>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

export default Header;
