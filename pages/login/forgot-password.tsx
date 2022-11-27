import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, Page, Heading } from "../../components";
import { BACKEND_URL } from "../../utils";

const ForgotPassword = () => {
  const router = useRouter();
  const toast = useToast({
    position: "top-right",
    isClosable: true,
    duration: 3000,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string }>();

  const onSubmit: SubmitHandler<{ email: string }> = async ({ email }) => {
    try {
      const res = await fetch(`${BACKEND_URL}/forgetpassword`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const { detail } = await res.json();
      if (res.status === 201) {
        toast({
          description: detail,
          status: "success",
          onCloseComplete() {
            router.push("/login");
          },
        });
        reset();
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
          description: "Please try again.",
          status: "error",
        });
      }
    }
  };
  return (
    <Page title="Forgot Password">
      <Box mt={6}>
        <Heading as="h1">Forgot Password</Heading>
        <Text textAlign="center" fontSize="sm" px="6">
          Type in your email. A new password will be sent to your mail if you
          have an account with us.
        </Text>
        <Container onSubmit={handleSubmit(onSubmit)} as="form">
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

          <Button type="submit" w="full" isLoading={isSubmitting} my={4} py={5}>
            Reset Password
          </Button>
          <Flex fontSize="sm" justify="center" gap={1}>
            Already have an account?<Link href="/login">Login</Link>
          </Flex>
        </Container>
      </Box>
    </Page>
  );
};

export default ForgotPassword;
