import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { ComponentProps, forwardRef, HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";
import { FieldError } from "~/components/ui/forms/Error";

interface InputProps extends ComponentProps<typeof Input> {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  helperText: string;
  required: boolean;
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(({ label, type = "text", helperText, ...props }, ref) => {
  const {
    formState: { errors }
  } = useFormContext();
  // const contexts = useFormContext();
  // console.log({ contexts });
  // const { errors } = contexts.formState;
  const { name } = props;
  if (!name) return null;
  const fieldnames = name.split(".");
  // const error = errors[name];
  const error = fieldnames.reduce((previousValue, currentValue) => {
    if (!previousValue) {
      return null;
    }
    return previousValue[currentValue];
  }, errors);
  const isInvalid = !!error;
  return (
    <FormControl isRequired={props.required}>
      <FormLabel>{label}</FormLabel>
      <FieldError name={props.name} />
      <Input type={type} ref={ref} isInvalid={isInvalid} errorBorderColor="red.300" {...props} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

export { FormInput };
