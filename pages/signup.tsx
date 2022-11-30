import { useRouter } from "next/router";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignupMutation } from "../services/api";
import { Eye, EyeClose } from "../icons";
import { Link, Layout, Heading } from "../components";

export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}
const SignUp = () => {
  const router = useRouter();
  const [show, setShow] = useState({ pWord: false, cpWord: false });
  const [signup, { isLoading }] = useSignupMutation();
  const toast = useToast({
    position: "top-right",
    isClosable: true,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    signup(data)
      .unwrap()
      .then((res: { detail: string }) => {
        toast({
          description: res.detail,
          status: "success",
          onCloseComplete() {
            router.push("/login");
          },
        });
        reset();
        setShow({ pWord: false, cpWord: false });
      })
      .catch((err: { status: string; data: { detail: string } }) => {
        console.log("Error: ", err);
        if (err.status === "FETCH_ERROR") {
          toast({
            description: "Check your internet connection",
            status: "error",
          });
        } else {
          toast({
            description: err.data.detail,
            status: "error",
          });
        }
      });
  };

  return (
    <Layout title="Sign up">
      <Box as="main" mt={6}>
        <Heading as="h1">Sign Up</Heading>
        <Text textAlign="center">Sign up on the platform</Text>

        <Container
          as="form"
          mt={4}
          maxW="container.sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Flex direction={["column", "row"]} gap={[2, 3]} mb={[2]}>
            <FormControl flexBasis="100%" isInvalid={Boolean(errors.username)}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                })}
                placeholder="Choose a username"
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.email)}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email Address"
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={["column", "row"]} gap={[2, 3]}>
            <FormControl isInvalid={Boolean(errors.password)}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                      message:
                        "Password must be at least 6 characters, contain at least one uppercase letter, one lowercase letter, and one number",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be at most 20 characters",
                    },
                  })}
                  type={show.pWord ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement>
                  <IconButton
                    aria-label="toggle password visibility"
                    icon={show.pWord ? <EyeClose /> : <Eye />}
                    onClick={() =>
                      setShow((show) => ({
                        pWord: !show.pWord,
                        cpWord: show.cpWord,
                      }))
                    }
                  ></IconButton>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.confirm_password)}>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  id="confirmPassword"
                  {...register("confirm_password", {
                    validate: (value) =>
                      value === getValues("password") ||
                      "The passwords do not match",
                    required: "Confirm Password",
                  })}
                  type={show.cpWord ? "text" : "password"}
                  placeholder="Confirm Password"
                />
                <InputRightElement>
                  <IconButton
                    aria-label="toggle password visibility"
                    icon={show.cpWord ? <EyeClose /> : <Eye />}
                    onClick={() =>
                      setShow((show) => ({
                        cpWord: !show.cpWord,
                        pWord: show.pWord,
                      }))
                    }
                  ></IconButton>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.confirm_password && errors.confirm_password.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <Button type="submit" w="full" my={4} isLoading={isLoading}>
            Sign Up
          </Button>

          <Text fontSize="sm">
            Already have an account? <Link href="/login">Login</Link>
          </Text>
        </Container>
      </Box>
    </Layout>
  );
};

export default SignUp;
