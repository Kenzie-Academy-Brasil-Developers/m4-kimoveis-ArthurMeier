import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email(),
  password: z.string().min(4),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string().nullish(),
  deletedAt: z.string().nullish(),
});

const requestUserSchema = userSchema.omit({
  deletedAt: true,
  createdAt: true,
  updatedAt: true,
  id: true,
});

const responseUserSchema = userSchema.omit({ password: true });

const responseAllUsersSchema = z.array(responseUserSchema);

const updateUserSchema = requestUserSchema.partial();

export {
  requestUserSchema,
  userSchema,
  responseUserSchema,
  responseAllUsersSchema,
  updateUserSchema,
};
