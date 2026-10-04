import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    fName: z
      .string()
      .trim()
      .min(2, "First name must contain at least 2 characters")
      .max(50),

    lName: z
      .string()
      .trim()
      .min(2, "Last name must contain at least 2 characters")
      .max(50),

    address: z
      .string()
      .trim()
      .min(5, "Address must contain at least 5 characters"),

    contactNumber: z
      .string()
      .trim()
      .regex(/^\+?[1-9]\d{7,14}$/, "Invalid contact number"),

    email: z
      .email("Invalid email address"),

    password: z
      .string()
      .min(8, "Password must contain at least 8 characters")
      .regex(/[A-Z]/, "Password must contain an uppercase letter")
      .regex(/[a-z]/, "Password must contain a lowercase letter")
      .regex(/[0-9]/, "Password must contain a number")
  })
});

export const updateUserSchema = z.object({
  params: z.object({
    userId: z.string().min(1, "User ID is required")
  }),

  body: z.object({
    fName: z.string().trim().min(2).max(50).optional(),

    lName: z.string().trim().min(2).max(50).optional(),

    address: z.string().trim().min(5).optional(),

    contactNumber: z
      .string()
      .trim()
      .regex(/^\+?[1-9]\d{7,14}$/, "Invalid contact number")
      .optional(),

    email: z
      .email("Invalid email address")
      .optional(),

    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/)
      .regex(/[a-z]/)
      .regex(/[0-9]/)
      .optional()
  })
});

export const userIdSchema = z.object({
  params: z.object({
    userId: z.string().min(1, "User ID is required")
  })
});
