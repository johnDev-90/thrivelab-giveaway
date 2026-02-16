import z from "zod";

export const stepOneSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Invalid phone number"),
  instagramHandle: z
    .string()
    .optional()
    .refine((val) => !val || /^@?[a-zA-Z0-9._]+$/.test(val), {
      message: "Invalid Instagram handle",
    }),
});

export const stepTwoSchema = z.object({
  painArea: z.array(z.string()).min(1, "Please select at least one pain area"),
  painAreaOther: z.string().optional(),
});

export const stepThreeSchema = z.object({
  whyNotYet: z.array(z.string()).min(1, "Please select at least one option"),
});

export const stepFourSchema = z.object({
  interestLevel: z.string().min(1, "Please select at least one option"),
});

export const finalSchema = z.object({
  ...stepOneSchema.shape,
  ...stepTwoSchema.shape,
  ...stepThreeSchema.shape,
  ...stepFourSchema.shape,
});
