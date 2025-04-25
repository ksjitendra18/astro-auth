import {
  maxLength,
  minLength,
  object,
  regex,
  string,
  trim,
  z,
} from "@zod/mini";

export const EmailVerificationSchema = object({
  id: string({ error: "ID is required" }).check(trim()),

  code: string({ error: "Code is required" }).check(
    minLength(6, { error: "Enter a valid code" }),
    maxLength(6, { error: "Enter a valid code" }),
    regex(/^\d+$/, {
      error: "Code should only contain digits",
    }),
    trim()
  ),
});

export type EmailVerificationSchemaType = z.infer<
  typeof EmailVerificationSchema
>;
