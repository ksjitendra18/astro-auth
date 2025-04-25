import { object, string, z } from "zod";

export const EmailVerificationSchema = object({
  id: string({ error: "ID is required" }).trim(),
  code: string({ error: "Code is required" })
    .min(6, { error: "Enter a valid code" })
    .max(6, { error: "Enter a valid code" })
    .trim()
    .regex(/^\d+$/, {
      message: "Code should only contain digits",
    }),
});

export type EmailVerificationSchemaType = z.infer<
  typeof EmailVerificationSchema
>;
