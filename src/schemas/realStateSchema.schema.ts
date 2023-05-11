import { z } from "zod";

const addressSchema = z.object({
  id: z.number(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const realStateSchema = z.object({
  id: z.number(),
  value: z
    .string()
    .regex(/^\d+(\.\d+)?$/)
    .default("0")
    .or(z.number().positive().default(0)),
  size: z.number().int().positive(),
  address: addressSchema,
  categoryId: z.number().int().positive(),
  sold: z.boolean().default(false).optional(),
});

const requestRealStateSchema = realStateSchema.omit({
  sold: true,
  id: true,
  createdAt: true,
  updatedAt: true,
});

const addressSchemaRequest = addressSchema.omit({ id: true });

const responseAllRealStateSchema = z.array(realStateSchema);

export {
  realStateSchema,
  requestRealStateSchema,
  responseAllRealStateSchema,
  addressSchemaRequest,
  addressSchema,
};
