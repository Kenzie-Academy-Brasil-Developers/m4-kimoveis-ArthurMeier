import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { TRealStateWithoutCategoryId } from "../../interfaces/realStateInterfaces.interface";
import { realStateWithoutCategoryId } from "../../schemas/realStateSchema.schema";

const listSchedulesService = async (
  realEstate: number
): Promise<TRealStateWithoutCategoryId> => {
  const estateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const realEstateList: RealEstate | null = await estateRepository.findOne({
    where: {
      id: realEstate,
    },
    relations: {
      address: true,
      category: true,
      schedules: {
        user: true,
      },
    },
  });

  if (!realEstateList) {
    throw new AppError("RealEstate not found", 404);
  }

  return realEstateList;
};

export default listSchedulesService;
