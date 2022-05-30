import { forwardRef, ComponentProps } from "react";
import { FormHelperText, FormControl, RadioGroup, Stack, Radio } from "@chakra-ui/react";
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

const FormRadio = forwardRef<HTMLInputElement, InputProps>(({ label, helperText, values, name, ...props }, ref) => (
  <FormControl>
    <RadioGroup>
      {values.map(({ radioLabel, value }) => (
        <Stack direction="row" key={value}>
          <Radio value={value} name={name} ref={ref} {...props}>
            {radioLabel}
          </Radio>
        </Stack>
      ))}
    </RadioGroup>
    <FieldError name={props.name} />
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
));

export { FormRadio };
