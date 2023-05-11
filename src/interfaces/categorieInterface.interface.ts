import { z } from "zod";
import {
  requestCategorySchema,
  responseAllCategoriesSchema,
  responseCategorySchema,
} from "../schemas/categorieSchema.schema";

type TCategoryRequest = z.infer<typeof requestCategorySchema>;
type TCategoryResponse = z.infer<typeof responseCategorySchema>;
type TAllCategoriesResponse = z.infer<typeof responseAllCategoriesSchema>;

export { TCategoryRequest, TCategoryResponse, TAllCategoriesResponse };
