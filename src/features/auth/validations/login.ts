import { email, minLength, object, regex, string, trim, z } from "@zod/mini";

export const LoginSchema = object({
  email: email({
    error: (issue) =>
      issue.input === undefined ? "Email is required" : "Enter a valid email",
  }).check(trim()),
  password: string({ error: "Password is required" }).check(
    minLength(8, { error: "Password should be more than 8 characters" }),
    trim(),
    regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/, {
      error:
        "Password must contain a lowercase letter, uppercase letter, number, and symbol",
    })
  ),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
