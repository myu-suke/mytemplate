import { forwardRef, ComponentProps, HTMLInputTypeAttribute } from "react";
import { FormLabel, FormHelperText, Input, FormControl } from "@chakra-ui/react";
import { FieldError } from "~/components/ui/forms/Error";

interface InputProps extends ComponentProps<typeof Input> {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  helperText: string;
  required: boolean;
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(({ label, type = "text", helperText, ...props }, ref) => (
  <FormControl isRequired={props.required}>
    <FormLabel>{label}</FormLabel>
    <FieldError name={props.name} />
    <Input type={type} ref={ref} {...props} />
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
));

export { FormInput };
