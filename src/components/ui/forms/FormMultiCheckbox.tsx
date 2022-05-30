import { forwardRef, ComponentProps } from "react";
import { FormHelperText, Checkbox, FormControl } from "@chakra-ui/react";
import { FieldError } from "~/components/ui/forms/Error";

type MultiCheckBoxProps = {
  checkLabel: string;
  value: string | number;
};

interface InputProps extends ComponentProps<typeof Checkbox> {
  label: string;
  name: string;
  helperText: string;
  required: boolean;
  children: React.ReactNode;
  values: MultiCheckBoxProps[];
}

const FormMultiCheckbox = forwardRef<HTMLInputElement, InputProps>(
  ({ label, children, helperText, values, ...props }, ref) => (
    <FormControl isRequired={props.required}>
      {values.map(({ checkLabel, value }) => (
        <Checkbox key={value} ref={ref} value={value} {...props}>
          {checkLabel}
        </Checkbox>
      ))}
      <FieldError name={props.name} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
);

export { FormMultiCheckbox };
