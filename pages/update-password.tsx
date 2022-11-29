import { useRouter } from "next/router";
import { useState } from "react";
import {
  useToast,
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
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useUpdatePasswordMutation } from "../services/api";
import { useAppSelector } from "../services/hooks";
import { Heading, Layout, Link } from "../components";
import { EyeClose, Eye, ArrowLeft } from "../icons";

export interface PasswordForm {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}
const UpdatePassword = () => {
  const router = useRouter();
  const token = useAppSelector((state) => state.login.token);
  const toast = useToast({
    position: "top-right",
    isClosable: true,
  });
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirmNew: false,
  });
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const handleToggle = (name: "old" | "new" | "confirmNew") => {
    setShowPassword((state) => ({ ...state, [name]: !state[name] }));
  };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<PasswordForm>();

  const newPassword = getValues("new_password");

  const onSubmit: SubmitHandler<PasswordForm> = (data) => {
    updatePassword({ ...data, token })
      .unwrap()
      .then((response: { status: number; data: { detail: string } }) => {
        console.log("Response: ", response);
        if (response.status === 200) {
          console.log(response);
          toast({
            description: "Password updated successfully",
            status: "success",
            onCloseComplete() {
              router.push("/login");
            },
          });
        } else {
          console.log("Not done", response);
          toast({
            description: "Password updated successfully",
            status: "success",
          });
        }
      })
      .catch((err: { status: string; data: { detail: string } }) => {
        console.error(err);
        if (err.status === "FETCH_ERROR") {
          toast({
            description: "Check your internet connection",
            status: "error",
          });
        } else {
          console.log("main error", err);
          toast({
            description: err.data.detail,
            status: "error",
            onCloseComplete() {
              router.replace("/login");
            },
          });
        }
      });
  };
  return (
    <Layout title="Update Password">
      <Box as="main" mt={6}>
        <Heading as="h1">Update Password</Heading>
        <Container as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl my={3} isInvalid={Boolean(errors.old_password)}>
            <FormLabel htmlFor="old_password">Old Password</FormLabel>
            <InputGroup>
              <Input
                id="old_password"
                type={showPassword.old ? "text" : "password"}
                placeholder="Old Password"
                {...register("old_password", { required: "Field is required" })}
              />
              <InputRightElement>
                <IconButton
                  aria-label="toggle password visibility"
                  icon={showPassword.old ? <EyeClose /> : <Eye />}
                  onClick={() => handleToggle("old")}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.old_password && errors.old_password.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.new_password)}>
            <FormLabel htmlFor="new_password">New Password</FormLabel>
            <InputGroup>
              <Input
                id="new_password"
                type={showPassword.new ? "text" : "password"}
                placeholder="New Password"
                {...register("new_password", { required: "Field is required" })}
              />
              <InputRightElement>
                <IconButton
                  aria-label="toggle password visibility"
                  icon={showPassword.new ? <EyeClose /> : <Eye />}
                  onClick={() => handleToggle("new")}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.new_password && errors.new_password.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl my={3} isInvalid={Boolean(errors.confirm_new_password)}>
            <FormLabel htmlFor="confirm_new_password">
              Confirm New Password
            </FormLabel>
            <InputGroup>
              <Input
                id="confirm_new_password"
                placeholder="Confirm New Password"
                type={showPassword.confirmNew ? "text" : "password"}
                {...register("confirm_new_password", {
                  required: "Field is required",
                  validate: (confirm_new_password) =>
                    newPassword === confirm_new_password ||
                    "Passwords do not match",
                })}
              />
              <InputRightElement>
                <IconButton
                  aria-label="toggle password visibility"
                  icon={showPassword.confirmNew ? <EyeClose /> : <Eye />}
                  onClick={() => handleToggle("confirmNew")}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.confirm_new_password &&
                errors.confirm_new_password.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" w="full" isLoading={isLoading}>
            Update
          </Button>
        </Container>
        <Flex textAlign="center" mt={4} align="center" justify="center">
          <ArrowLeft color="blue.500" />
          <Link href="/login">
            <Text as="span" ml={1} fontSize={14}>
              Back to Login
            </Text>
          </Link>
        </Flex>
      </Box>
    </Layout>
  );
};

export default UpdatePassword;
