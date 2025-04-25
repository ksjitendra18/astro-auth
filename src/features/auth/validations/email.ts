import { email, string, trim, z } from "@zod/mini";

export const EmailSchema = email({
  error: (issue) =>
    issue.input === undefined ? "Email is required" : "Enter a valid email",
}).check(trim());

export type EmailSchemaType = z.infer<typeof EmailSchema>;
