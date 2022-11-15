import { useState } from "react";
import {
  Input,
  Text,
  Heading,
  Stack,
  Container,
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Eye, EyeClose } from "../../icons";
import { FormInput, Link, Page } from "../../components";

interface FormData {
  email: string;
  password: string;
}
const Login = () => {
  const [show, setShow] = useState(false);
  const { control, handleSubmit, reset } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Page title="Login">
      <main>
        <Heading as="h1" textAlign="center" my={4} size="lg">
          Login
        </Heading>
        <Text textAlign="center">Login into the platform</Text>
        <Container onSubmit={handleSubmit(onSubmit)} as="form">
          <FormInput
            control={control}
            label="Email"
            type="email"
            name="email"
          />
          <Stack spacing={1} mt={2}>
            <label htmlFor="password">Password</label>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputGroup>
                  <Input
                    {...field}
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="toggle password visibility"
                      icon={show ? <EyeClose /> : <Eye />}
                      onClick={() => setShow((show) => !show)}
                    ></IconButton>
                  </InputRightElement>
                </InputGroup>
              )}
            />
          </Stack>
          <Button type="submit" w="full" mt={4} py={5}>
            Login
          </Button>
          <Flex
            direction={["column", "row"]}
            fontSize="sm"
            align="center"
            justify="space-between"
          >
            <Text>
              Don&apos;t have an account? <Link href="/signup">Sign up</Link>
            </Text>
            <Link href="/login/forgot-password">Forgot Password?</Link>
          </Flex>
        </Container>
      </main>
    </Page>
  );
};

export default Login;
