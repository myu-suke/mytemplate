import { forwardRef, ComponentProps } from "react";
import { FormLabel, FormHelperText, FormControl, Select } from "@chakra-ui/react";
import { FieldError } from "~/components/ui/forms/Error";

type InputProps = {
  label: string;
  name: string;
  helperText: string;
  required: boolean;
  children: React.ReactNode;
} & ComponentProps<typeof Select> &
  React.FunctionComponent;

const FormSelect = forwardRef<HTMLSelectElement, InputProps>(({ label, helperText, children, ...props }, ref) => (
  <FormControl isRequired={props.required}>
    <FormLabel>{label}</FormLabel>
    <FieldError name={props.name} />
    <Select ref={ref} {...props}>
      {children}
    </Select>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
));

export { FormSelect };
