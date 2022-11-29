import { useState } from "react";
import type { MouseEvent, SyntheticEvent } from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Heading } from "../components";
import { EyeClose, Eye } from "../icons";
interface PasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
const UpdatePassword = () => {
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirmNew: false,
  });
  const handleToggle = (name: "old" | "new" | "confirmNew") => {
    setShowPassword((state) => ({ ...state, [name]: !state[name] }));
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordForm>();
  const onSubmit: SubmitHandler<PasswordForm> = (data) => {
    console.log(data);
  };

  return (
    <main>
      <Heading as="h1">Update Password</Heading>
      <Container as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl my={3} isInvalid={Boolean(errors.oldPassword)}>
          <FormLabel htmlFor="oldPassword">Old Password</FormLabel>
          <InputGroup>
            <Input
              id="oldPassword"
              type={showPassword.old ? "text" : "password"}
              placeholder="Old Password"
              {...register("oldPassword", { required: "Field is required" })}
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
            {errors.oldPassword && errors.oldPassword.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.newPassword)}>
          <FormLabel htmlFor="newPassword">New Password</FormLabel>
          <InputGroup>
            <Input
              id="newPassword"
              type={showPassword.new ? "text" : "password"}
              placeholder="New Password"
              {...register("newPassword", { required: "Field is required" })}
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
            {errors.newPassword && errors.newPassword.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl my={3} isInvalid={Boolean(errors.confirmNewPassword)}>
          <FormLabel htmlFor="confirmNewPassword">
            Confirm New Password
          </FormLabel>
          <InputGroup>
            <Input
              id="confirmNewPassword"
              placeholder="Confirm New Password"
              type={showPassword.confirmNew ? "text" : "password"}
              {...register("confirmNewPassword", {
                required: "Field is required",
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
            {errors.confirmNewPassword && errors.confirmNewPassword.message}
          </FormErrorMessage>
        </FormControl>
        <Button w="full" isLoading={isSubmitting}>
          Submit
        </Button>
      </Container>
    </main>
  );
};

export default UpdatePassword;
