import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useProfile } from "../../../hooks/useProfile";



const Balance: FC = () => {
  const { user } = useProfile()
  return (
    <Box mt={4} pos="relative" width={"50%"} m="auto">
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        pos="relative"
        zIndex={2}
      >
        <Heading fontSize="5xl">$ { user?.balance}</Heading>
        <Text fontSize="xl" color="whiteAlpha.500">
          Balance
        </Text>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        pos="absolute"
        zIndex={1}
        top={0}
        left={0}
        w="full"
        h="full"
      >
        <Box h={150} w={150} pos="absolute" top={0} left={"20%"}>
          <Box
            boxShadow="200px 0 120px rgba(130 255 113 / 43%)"
            h={100}
            w={120}
            pos="absolute"
            left={-180}
            top={6}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Balance;
