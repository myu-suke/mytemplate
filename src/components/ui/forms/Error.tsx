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

  if (!name) return null;

  const error = errors[name];

  if (!error) return null;

  // return <FormErrorMessage>{error.message}</FormErrorMessage>;
  return <span>{error.message}</span>;
};

export { FieldError };
