import { useState } from "react";
import {
  Input,
  Text,
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
  Box,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { setToken } from "../../services/slices/loginSlice";
import { useLoginMutation } from "../../services/api";
import { useAppSelector, useAppDispatch } from "../../services/hooks";
import { Eye, EyeClose } from "../../icons";
import { Link, Layout, Heading } from "../../components";

interface FormData {
  email: string;
  password: string;
}
const Login = () => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.login.token);
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const toast = useToast({
    position: "top-right",
    isClosable: true,
  });
  const onSubmit: SubmitHandler<FormData> = ({ email, password }) => {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    if (isLoggedIn) {
      toast({
        description: "You are already logged in",
        status: "error",
      });
    } else {
      login(formData)
        .unwrap()
        .then((res) => {
          dispatch(setToken(res.access_token));
          toast({
            description: "Logged in successfully",
            status: "success",
          });
          reset();
          setShow(false);
        })
        .catch((err) => {
          console.error(err);
          if (err.status === "FETCH_ERROR") {
            toast({
              description: "Check your internet connection",
              status: "error",
            });
          } else {
            toast({
              description: "Invalid username or password",
              status: "error",
            });
          }
        });
    }
  };
  return (
    <Layout title="Login">
      <Box as="main" mt={6}>
        <Heading as="h1">Login</Heading>
        <Text textAlign="center">Login into the platform</Text>
        <Container onSubmit={handleSubmit(onSubmit)} as="form">
          <FormControl mt={3} isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
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
          <Button my={4} w="full" isLoading={isLoading} type="submit">
            Login
          </Button>

          <Flex
            direction={["column", "row"]}
            fontSize="sm"
            align="center"
            justify="space-between"
          >
            <Text mb={1}>
              Don&apos;t have an account? <Link href="/signup">Sign up</Link>
            </Text>
            <Link href="/login/forgot-password">Forgot Password?</Link>
            <Link href="/update-password">Change Password</Link>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
};

export default Login;
