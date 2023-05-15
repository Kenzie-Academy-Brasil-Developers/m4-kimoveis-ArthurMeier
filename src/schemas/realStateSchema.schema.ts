import { z } from "zod";
import { responseCategorySchema } from "./categorieSchema.schema";

const addressSchema = z.object({
  id: z.number(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).default(""),
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
  sold: z.boolean().default(false),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});

const addressSchemaRequest = addressSchema.omit({ id: true });

const requestRealStateSchema = realStateSchema
  .omit({
    sold: true,
    id: true,
    createdAt: true,
    updatedAt: true,
    address: true,
  })
  .extend({ address: addressSchemaRequest });

const responseAllRealStateSchema = z.array(realStateSchema);

const realStateWithoutCategoryId = realStateSchema
  .omit({ categoryId: true })
  .extend({ category: responseCategorySchema });

export {
  realStateSchema,
  requestRealStateSchema,
  responseAllRealStateSchema,
  addressSchemaRequest,
  addressSchema,
  realStateWithoutCategoryId,
};
