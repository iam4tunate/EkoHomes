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
  title: z.string().min(1, 'Field cannot be empty'),
  price: z.number().min(1, 'Field cannot be empty'),
  year_built: z.number().min(4, 'minimum of 4 characters'),
  payment_method: z.string().min(1, 'Field cannot be empty'),
  bathrooms: z.number().min(1, 'Field cannot be empty'),
  bedrooms: z.number().min(1, 'Field cannot be empty'),
  toilets: z.number().min(1, 'Field cannot be empty'),
  address: z
    .string()
    .min(12)
    .max(100, { message: 'maximum of 100 characters' }),
  state: z.string(),
  lga: z.string().nonempty('Select a LGA'),
  description: z
    .string()
    .min(130, { message: 'minimum of 130 characters' })
    .max(250, { message: 'maximum of 250 characters' }),
  features: z.string().min(1, 'Field cannot be empty'),
  files: z.custom<File[]>(),
  //!issue with this is that you have to upload a new file when you want to upload
  // files: z.array(z.instanceof(File)).min(1, "At least one file is required"),
});
