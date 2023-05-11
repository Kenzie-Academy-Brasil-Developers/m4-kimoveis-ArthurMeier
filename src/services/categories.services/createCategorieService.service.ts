import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";
import {
  TUserRequest,
  TUserResponse,
} from "../../interfaces/userInterfaces.interface";
import {
  TCategoryRequest,
  TCategoryResponse,
} from "../../interfaces/categorieInterface.interface";
import { responseCategorySchema } from "../../schemas/categorieSchema.schema";

const createCategorieService = async (
  categoryData: TCategoryRequest
): Promise<TCategoryResponse> => {
  const categoryRepositorie: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepositorie.create(categoryData);

  await categoryRepositorie.save(category);

  const newCategory: TCategoryResponse = responseCategorySchema.parse(category);

  return newCategory;
};

export default createCategorieService;
