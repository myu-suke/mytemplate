// import { FormErrorMessage } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

type FieldErrorType = {
  name?: string;
};

const FieldError = ({ name }: FieldErrorType) => {
  const {
    formState: { errors }
  } = useFormContext();
  window.console.error(errors);
  window.console.info(name);

  if (!name) return null;
  const fieldnames = name.split(".");
  // const error = errors[name];
  const error = fieldnames.reduce((previousValue, currentValue) => {
    if (!previousValue) {
      return null;
    }
    return previousValue[currentValue];
  }, errors);

  if (!error) return null;

  // return <FormErrorMessage>{error.message}</FormErrorMessage>;
  return <span>{error.message}</span>;
};

export { FieldError };
