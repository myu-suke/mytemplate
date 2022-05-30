// we omit the native `onSubmit` event in favor of `SubmitHandler` event
// the beauty of this is, the values returned by the submit handler are fully typed

import { ComponentProps } from "react";
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";

interface FormProps<T extends FieldValues = any> extends Omit<ComponentProps<"form">, "onSubmit"> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

const Form = <T extends FieldValues>({ form, onSubmit, children, ...props }: FormProps<T>) => (
  <FormProvider {...form}>
    {/* the `form` passed here is return value of useForm() hook */}
    <form onSubmit={form.handleSubmit(onSubmit)} {...props} noValidate>
      <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
    </form>
  </FormProvider>
);

export { Form };
