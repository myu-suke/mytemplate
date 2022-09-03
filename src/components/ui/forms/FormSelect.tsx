import { FormControl, FormHelperText, FormLabel, Select } from "@chakra-ui/react";
import { ComponentProps, forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import { FieldError } from "~/components/ui/forms/Error";

type InputProps = {
  label: string;
  name: string;
  helperText: string;
  required: boolean;
  children: React.ReactNode;
} & ComponentProps<typeof Select> &
  React.FunctionComponent;

const FormSelect = forwardRef<HTMLSelectElement, InputProps>(({ label, helperText, children, ...props }, ref) => {
  const { getValues } = useFormContext();
  const { name } = props;
  const propsValue = getValues(name);
  return (
    <FormControl isRequired={props.required}>
      <FormLabel>{label}</FormLabel>
      <FieldError name={props.name} />
      <Select ref={ref} defaultValue={propsValue} {...props}>
        {children}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

export { FormSelect };
