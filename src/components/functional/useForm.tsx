// function to resolve zod schema we provide
import { zodResolver } from "@hookform/resolvers/zod";

import {
  // we import useForm hook as useHookForm
  useForm as useHookForm,
  // typescript types of useHookForm props
  UseFormProps as UseHookFormProps
} from "react-hook-form";

// Type of zod schema
import { ZodSchema, TypeOf } from "zod";

// We provide additional option that would be our zod schema.
interface UseFormProps<T extends ZodSchema<any>> extends UseHookFormProps<TypeOf<T>> {
  schema: T;
}
const useForm = <T extends ZodSchema<any>>({ schema, defaultValues, ...formConfig }: UseFormProps<T>) =>
  useHookForm({
    ...formConfig,
    defaultValues,
    resolver: zodResolver(schema)
  });

export { useForm };
