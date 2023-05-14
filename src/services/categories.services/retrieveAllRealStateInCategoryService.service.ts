import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";
import { TAllRealStateResponse } from "../../interfaces/realStateInterfaces.interface";
import { responseAllRealStateSchema } from "../../schemas/realStateSchema.schema";

const retrieveAllRealStateInCategoryService = async (categoryId: number) => {
  const CategoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: any = await CategoryRepository.find({
    where: { id: categoryId },
    relations: ["RealEstate"],
  });

  return category;
};

export default retrieveAllRealStateInCategoryService;
