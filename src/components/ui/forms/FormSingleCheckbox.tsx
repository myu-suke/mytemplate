import { forwardRef, ComponentProps } from "react";
import { FormLabel, FormHelperText, Checkbox, FormControl } from "@chakra-ui/react";
import { FieldError } from "~/components/ui/forms/Error";

interface InputProps extends ComponentProps<typeof Checkbox> {
  label: string;
  value: string;
  name: string;
  helperText: string;
  required: boolean;
  children: React.ReactNode;
}

const FormSingleCheckbox = forwardRef<HTMLInputElement, InputProps>(
  ({ label, children, value, helperText, ...props }, ref) => (
    <FormControl isRequired={props.required}>
      <FormLabel>{label}</FormLabel>
      <FieldError name={props.name} />
      <Checkbox ref={ref} value={value} {...props}>
        {children}
      </Checkbox>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
);

export { FormSingleCheckbox };
