import { z } from "zod";

export const AddressSchema = z.object({
  city: z.string().min(1, { message: "必須入力です" }),
  street: z.union([z.string().nullable(), z.boolean()]), // checkbox用途ではunionでboolとstringを受け取る
  zipcode: z.array(z.string()).optional(),
  suite: z.string()
});

export const UserSchema = z.object({
  name: z.string().nonempty({ message: "必須入力です" }),
  username: z.string().nonempty({ message: "必須入力です" }),
  email: z.string().email({ message: "Eメールのフォーマットで入力してください" }),
  address: AddressSchema
});

export type UserFormSchema = z.infer<typeof UserSchema>;

export type User = UserFormSchema & {
  id: number;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
