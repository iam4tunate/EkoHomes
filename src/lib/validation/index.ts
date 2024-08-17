import { z } from 'zod';

export const registerValidation = z.object({
  first_name: z.string().min(2, { message: 'Must be at least 2 characters' }),
  last_name: z.string().min(2, { message: 'Must be at least 2 characters' }),
  email: z.string().email(),
  phone_number: z
    .string()
    .min(11, { message: 'Must be exactly 11 characters' })
    .max(11, { message: 'Must be exactly 11 characters' }),
  password: z.string().min(8, { message: 'minimum of 8 characters' }),
});

export const LoginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'minimum of 8 characters' }),
});

export const HomeValidation = z.object({
  title: z.string().min(5),
  // price: z.number().nonnegative("only positive value allowed"),
  price: z.number(),
  year_built: z.number(),
  payment_method: z.string(),
  bathrooms: z.number(),
  bedrooms: z.number(),
  toilets: z.number(),
  address: z.string().min(5).max(100, { message: 'maximum of 100 characters' }),
  state: z.string(),
  lga: z.string(),
  description: z
    .string()
    .min(130, { message: 'minimum of 130 characters' })
    .max(250, { message: 'maximum of 250 characters' }),
  features: z.string().nonempty('Features are required'),
  files: z.custom<File[]>(),
  //!issue with this is that you have to upload a new file when you want to upload
  // files: z.array(z.instanceof(File)).min(1, "At least one file is required"),
});
