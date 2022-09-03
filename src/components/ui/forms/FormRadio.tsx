import { FormControl, FormHelperText, FormLabel, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { ComponentProps, forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import { FieldError } from "~/components/ui/forms/Error";

type RadioProps = {
  radioLabel: string;
  value: string | number;
};

interface InputProps extends ComponentProps<typeof Radio> {
  label: string;
  name: string;
  helperText: string;
  values: RadioProps[];
}

const FormRadio = forwardRef<HTMLInputElement, InputProps>(({ label, helperText, values, ...props }, ref) => {
  const { getValues } = useFormContext();
  const { name } = props;
  const propsValue = getValues(name);
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup defaultValue={propsValue}>
        {values.map(({ radioLabel, value }) => (
          <Stack direction="row" key={value}>
            <Radio value={value} ref={ref} {...props}>
              {/* name={name} */}
              {radioLabel}
            </Radio>
          </Stack>
        ))}
      </RadioGroup>
      <FieldError name={props.name} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

export { FormRadio };
