import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Eye, EyeClose } from "../icons";
import { Link, Page } from "../components";
// import { useCustomToast as toast } from "../utils/toast";
interface FormData {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}
const SignUp = () => {
  const [show, setShow] = useState({ pWord: false, cpWord: false });
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();
  const password = getValues("password");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await fetch("https://e-commerce-66n3.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const d = await res.json();
      console.log("TRY RESULT");
      console.log(d);
      if (res.status === 201) {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
        reset();
        setShow({ pWord: false, cpWord: false });
      } else {
        toast({
          title: "An error occurred.",
          description: "We were unable to create your account.",
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error: any) {
      console.log("CATCH RESULT");
      console.log(error);

      if (error?.message === "Failed to fetch") {
        toast({
          title: "Network error.",
          description: "Please check your internet connection.",
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "An error occurred.",
          description: "Please try again.",
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };
  return (
    <Page title="Sign up">
      <Box as="main" mt={6}>
        <Heading textAlign="center">Sign Up</Heading>
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
                      value === password || "The passwords do not match",
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
          <Button type="submit" w="full" my={4} isLoading={isSubmitting}>
            Sign Up
          </Button>
          <Text fontSize="sm">
            Already have an account? <Link href="/login">Login</Link>
          </Text>
        </Container>
      </Box>
    </Page>
  );
};

export default SignUp;
