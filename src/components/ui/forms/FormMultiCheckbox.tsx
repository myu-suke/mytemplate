import { Checkbox, CheckboxGroup, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import { ComponentProps, forwardRef } from "react";
import { useFormContext } from "react-hook-form";
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
  ({ label, children, helperText, values, ...props }, ref) => {
    const { getValues } = useFormContext();
    const { name } = props;
    const propsValue = getValues(name);
    return (
      <FormControl isRequired={props.required}>
        <FormLabel>{label}</FormLabel>
        <CheckboxGroup defaultValue={propsValue}>
          {values.map(({ checkLabel, value }) => (
            <Checkbox key={value} ref={ref} value={value} {...props}>
              {checkLabel}
            </Checkbox>
          ))}
        </CheckboxGroup>
        <FieldError name={props.name} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

export { FormMultiCheckbox };
