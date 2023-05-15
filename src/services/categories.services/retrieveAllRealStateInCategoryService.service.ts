import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Repository } from "typeorm";

const retrieveAllRealEstateInCategoryService = async (
  categoryId: number
): Promise<Category> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryResult: Category | null = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });

  return categoryResult!;
};

export default retrieveAllRealEstateInCategoryService;
