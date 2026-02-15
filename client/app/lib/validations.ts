import z from "zod";


export const stepOneSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email({ message: "Invalid email" }),

  instagramHandle: z
    .string()
    .optional()
    .refine(
    (val) => !val || /^[a-zA-Z0-9._]+$/.test(val),
    { message: "Invalid Instagram handle" }
  ),
});

export const stepTwoSchema = z.object({
  painArea: z.string().min(1),
  painAreaOther: z.string().optional(),
});

export const stepThreeSchema = z.object({
  whyNotYet: z.string().min(1),
  interestLevel: z.string().min(1),
});