import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link, Page } from "../../components";

const ForgotPassword = () => {
  return (
    <Page title="Forgot Password">
      <main>
        <Heading as="h1" mt={6} mb={2} textAlign="center" size="lg">
          Forgot Password
        </Heading>
        <Text textAlign="center" fontSize="sm" px="6">
          Type in your email. A new password will be sent to your mail if you
          have an account with us.
        </Text>
        <Container as="form">
          <Text as="label" htmlFor="email" fontSize="sm">
            Email address:
          </Text>
          <Input type="email" placeholder="email" />

          <Button type="submit" w="full" mt={4} py={5}>
            Reset Password
          </Button>
          <Flex fontSize="sm" justify="flex-end">
            Already have an account? <Link href="/login">Login</Link>
          </Flex>
        </Container>
      </main>
    </Page>
  );
};

export default ForgotPassword;
