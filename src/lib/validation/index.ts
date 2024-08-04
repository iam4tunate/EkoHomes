import { z } from "zod";

export const registerValidation = z.object({
  first_name: z.string().min(2, { message: "Must be at least 2 characters" }),
  last_name: z.string().min(2, { message: "Must be at least 2 characters" }),
  email: z.string().email(),
  phone_number: z
    .string()
    .min(11, { message: "Must be exactly 11 characters" })
    .max(11, { message: "Must be exactly 11 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  //   username: z.string().min(2).max(50),
});

export const LoginValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
