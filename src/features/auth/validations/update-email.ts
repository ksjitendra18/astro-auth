import {
  email,
  maxLength,
  minLength,
  object,
  refine,
  string,
  z,
} from "@zod/mini";

export const UpdateEmailSchema = object({
  currentEmail: email({
    error: (issue) =>
      issue.input === undefined
        ? "Current Email is required"
        : "Enter a valid email",
  }),

  currentEmailOtp: string({
    error: "Current email OTP is required",
  }).check(
    minLength(6, { error: "OTP should be of 6 digits" }),
    maxLength(6, { error: "OTP should be of 6 digits" })
  ),

  newEmail: email({
    error: (issue) =>
      issue.input === undefined
        ? "New Email is required"
        : "Enter a valid email",
  }),

  newEmailOtp: string({ error: "New email OTP is required" }).check(
    minLength(6, { error: "OTP should be of 6 digits" }),
    maxLength(6, { error: "OTP should be of 6 digits" })
  ),
}).check(
  refine((data) => data.currentEmail !== data.newEmail, {
    error: "New Email cannot be the same as the current Email",
    path: ["newEmail"],
  })
);

export type UpdateEmailSchemaType = z.infer<typeof UpdateEmailSchema>;
