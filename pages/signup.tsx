import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, Page } from "../components";

const SignUp = () => {
  return (
    <Page title="Sign up">
      <Box as="main">
        <Heading textAlign="center">Sign Up</Heading>
        <Text>Sign up on the platform</Text>
        <Container as="form">
          <Flex gap={3}>
            <Stack flexBasis="100%" spacing={1}>
              <label htmlFor="name">Name</label>
              <Input placeholder="name" />
            </Stack>
            <Stack flexBasis="100%" spacing={1}>
              <label htmlFor="email">Email</label>
              <Input type="email" placeholder="email" />
            </Stack>
          </Flex>
          <Flex gap={3}>
            <Stack flexBasis="100%" spacing={1}>
              <label htmlFor="password">Password</label>
              <Input type="password" placeholder="password" />
            </Stack>
            <Stack flexBasis="100%" spacing={1}>
              <label htmlFor="email">Confirm Password</label>
              <Input type="password" placeholder="confirm password" />
            </Stack>
          </Flex>
          <Stack spacing={1} mt={2}>
            <label htmlFor="password">Password</label>
            <Input type="email" placeholder="password" />
          </Stack>
          <Button type="submit" w="full" mt={4} py={5}>
            Sign Up
          </Button>
          <Text>
            Already have an account? <Link href="/login">Login</Link>
          </Text>
        </Container>
      </Box>
    </Page>
  );
};

export default SignUp;
