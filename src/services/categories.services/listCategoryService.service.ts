import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";
import { TAllCategoriesResponse } from "../../interfaces/categorieInterface.interface";
import { responseAllCategoriesSchema } from "../../schemas/categorieSchema.schema";

const listCategoriesService = async (): Promise<TAllCategoriesResponse> => {
  const CategoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const Categories = await CategoryRepository.find();

  const CategorysList: TAllCategoriesResponse =
    responseAllCategoriesSchema.parse(Categories);

  return CategorysList;
};

export default listCategoriesService;
