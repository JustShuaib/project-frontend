import { useState } from "react";
import {
  Input,
  Text,
  Heading,
  Container,
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  IconButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Eye, EyeClose } from "../../icons";
import { Link, Page } from "../../components";
import { BACKEND_URL } from "../../utils/urls";

interface FormData {
  username: string;
  password: string;
}
const Login = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const toast = useToast({
    size: "small",
    position: "top-right",
    isClosable: true,
    styleConfig: { fontSize: "12px" },
  });
  const onSubmit: SubmitHandler<FormData> = async ({ username, password }) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    try {
      const res = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        body: formData,
      });
      const { detail } = await res.json();
      if (res.status === 200) {
        toast({
          description: detail,
          status: "success",
        });
        reset();
        setShow(false);
      } else {
        toast({
          description: detail,
          status: "error",
        });
      }
    } catch (error: any) {
      console.log(error);
      if (error?.message === "Failed to fetch") {
        toast({
          description: "Please check your internet connection.",
          status: "error",
        });
      } else {
        toast({
          description: "Something went wrong, Please try again.",
          status: "error",
        });
      }
    }
  };
  return (
    <Page title="Login">
      <main>
        <Heading as="h1" my={4} size="lg">
          Login
        </Heading>
        <Text textAlign="center">Login into the platform</Text>
        <Container onSubmit={handleSubmit(onSubmit)} as="form">
          <FormControl isInvalid={Boolean(errors.username)}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              placeholder="username"
              {...register("username", {
                required: "username is required",
              })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                {...register("password", {
                  required: "Password is required",
                })}
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
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button mt={4} w="full" isLoading={isSubmitting} type="submit">
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
