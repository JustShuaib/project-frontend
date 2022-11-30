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
import { useForgotPasswordMutation } from "../../services/api";
import { Link, Layout, Heading } from "../../components";

const ForgotPassword = () => {
  const router = useRouter();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const toast = useToast({
    position: "top-right",
    isClosable: true,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onSubmit: SubmitHandler<{ email: string }> = (data) => {
    forgotPassword(data)
      .unwrap()
      .then((res: { detail: string }) => {
        console.log("Response: ", res);
        toast({
          description: res.detail,
          status: "success",
          onCloseComplete() {
            router.push("/login");
          },
        });
        reset();
      })
      .catch((err: { status: string; data: { detail: string } }) => {
        console.log("Error: ", err);
        if (err.status === "FETCH_ERROR") {
          toast({
            description: "Check your internet connection",
            status: "error",
          });
        } else
          toast({
            description: err.data.detail,
            status: "error",
          });
      });
  };

  return (
    <Layout title="Forgot Password">
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

          <Button type="submit" w="full" isLoading={isLoading} my={4} py={5}>
            Reset Password
          </Button>
          <Flex fontSize="sm" justify="center" gap={1}>
            Already have an account? <Link href="/login">Login</Link>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
};

export default ForgotPassword;
