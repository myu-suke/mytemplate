import { Checkbox, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import { ComponentProps, forwardRef } from "react";
import { useFormContext } from "react-hook-form";
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
  ({ label, children, value, helperText, ...props }, ref) => {
    const {
      getValues,
      formState: { errors }
    } = useFormContext();
    const { name } = props;
    const propsValue = getValues(name);

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
        <Checkbox ref={ref} value={value} isInvalid={isInvalid} {...props} checked={propsValue === value}>
          {children}
        </Checkbox>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

export { FormSingleCheckbox };
