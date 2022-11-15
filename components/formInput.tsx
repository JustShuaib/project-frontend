import { Input, Stack } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
interface FormProp {
  name: string;
  label: string;
  control: any;
  type?: string;
}
const FormInput = ({ name, label, control, type = "text" }: FormProp) => {
  return (
    <Stack spacing={1}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Input id={name} {...field} type={type} />}
      />
    </Stack>
  );
};

export default FormInput;
