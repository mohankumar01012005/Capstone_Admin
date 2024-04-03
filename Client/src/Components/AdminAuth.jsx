import * as React from 'react';

import {
  Container,
  Box,
  FormLabel,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

const AdminAuth = () => {
  // const [count, setCount] = useState(5);


  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Stack spacing={4} maxW={{ base: '20rem', sm: '25rem' }} margin="0 auto">
        <Stack align="center" spacing={2}>
          <Heading width="90vw" paddingLeft="25vw"   fontSize={{ base: 'xl', sm: '3xl' }}>Hey Admin! Sign in to your account</Heading>
         
        </Stack>
        <Box pos="relative"
            marginTop="15vh"
            height="45vh"
        >
          <Box
            pos="absolute"
            top="-7px"
            right="-7px"
            bottom="-7px"
            left="-7px"
            rounded="lg"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            transform="rotate(-2deg)"
          ></Box>
          <VStack
            as="form"
            pos="relative"
            spacing={8}
            height="45vh"
            p={6}
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            boxShadow="lg"
          >
            <FormControl id="email">
              <FormLabel>Admin ID :</FormLabel>
              <Input marginTop="4vh" type="number" placeholder="Enter Admin ID" rounded="md" />
            </FormControl>
            <Button
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500'
              }}
              rounded="md"
              marginTop="5vh"
              w="100%"
            >
              Sign In
            </Button>
            {/* <Text>Chances Left :{}</Text> */}
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default AdminAuth;