import { z } from "zod";

const responseCategorySchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});

const requestCategorySchema = responseCategorySchema.omit({ id: true });

const responseAllCategoriesSchema = z.array(responseCategorySchema);

export {
  requestCategorySchema,
  responseCategorySchema,
  responseAllCategoriesSchema,
};
