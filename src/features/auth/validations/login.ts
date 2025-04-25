import { email, object, string, z } from "zod";

export const LoginSchema = object({
  email: email({
    error: (issue) =>
      issue.input === undefined ? "Email is required" : "Enter a valid email",
  }).trim(),
  password: string({ error: "Password is required" })
    .min(8, "Password should be more than 8 characters")
    .trim()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/, {
      error:
        "Password must contain a lowercase letter, uppercase letter, number, and symbol",
    }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
