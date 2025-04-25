import { email, string, z } from "zod";

export const EmailSchema = email({
  error: (issue) =>
    issue.input === undefined ? "Email is required" : "Enter a valid email",
}).trim();

export type EmailSchemaType = z.infer<typeof EmailSchema>;
