import { Box, Flex, Text, Icon, Link, Image } from "@chakra-ui/core";

function Header() {

  return (
    <Box bg="black" w="100%" p={4} color="white" maxH="100px">
      <Flex align="center" flexGrow={1}>
        <Flex>
          <Text>Logo</Text>
        </Flex>
        <Flex flexGrow={12} align="center" justify="center">
          Weclcome From Sentiment Analysis
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
