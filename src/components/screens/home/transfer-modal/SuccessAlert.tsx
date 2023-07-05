import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";

const SuccessAlert: FC<{isSuccess: boolean}> = ({isSuccess}) => {
    if(!isSuccess) return null
  return (

      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="full"
        pos="absolute"
        left={0}
        top={0}
        zIndex={3}
        bg={"#303f35"}
        className="alert-custom"
      >
        <Flex className="alert-custom" alignItems='center' direction='column'>
        <AlertIcon boxSize="60px" mr={0} />
        <AlertTitle mt={4} mb={3} fontSize="3xl">
          Money has been Sent!
        </AlertTitle>
        <AlertDescription maxWidth="sm" fontSize="xl">
          Thanks for use our application!
        </AlertDescription>
        </Flex>
      </Alert>

  )  
}

export default SuccessAlert;
