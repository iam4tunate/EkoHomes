import { z } from "zod";

export const registerValidation = z.object({
  first_name: z.string().min(2, { message: "Must be at least 2 characters" }),
  last_name: z.string().min(2, { message: "Must be at least 2 characters" }),
  email: z.string().email(),
  phone_number: z
    .string()
    .min(11, { message: "Must be exactly 11 characters" })
    .max(11, { message: "Must be exactly 11 characters" }),
  password: z.string().min(8, { message: "minimum of 8 characters" }),
});

export const LoginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "minimum of 8 characters" }),
});

export const HomeValidation = z.object({
  title: z.string().min(5),
  price: z.string(),
  address: z.string().min(5).max(150, { message: "maximum of 150 characters" }),
  no_of_bathrooms: z.string(),
  no_of_bedrooms: z.string(),
  year_built: z.string(),
  sqm: z.string(),
  payment_method: z.string(),
  description: z
    .string()
    .min(5)
    .max(1000, { message: "maximum of 1000 characters" }),
  features: z.string(),
  files: z.custom<File[]>(),
});
