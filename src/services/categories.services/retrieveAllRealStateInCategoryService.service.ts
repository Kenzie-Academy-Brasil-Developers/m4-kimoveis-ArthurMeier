import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";
import { TAllRealStateResponse } from "../../interfaces/realStateInterfaces.interface";
import { responseAllRealStateSchema } from "../../schemas/realStateSchema.schema";

const retrieveAllRealStateInCategoryService = async (categoryId: number) => {
  const CategoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  console.log("oio");
  const category = await CategoryRepository.find();

  const realStateList: TAllRealStateResponse =
    responseAllRealStateSchema.parse(category);

  return realStateList;
};

export default retrieveAllRealStateInCategoryService;
