import { z } from "zod";

export const PersonalFormSchema = z.object({
  name: z.string().nonempty("This field is required"),
  email: z.string().email().nonempty("This field is required"),
  phone: z
    .string()
    .nonempty("This field is required")
    .trim()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
});
