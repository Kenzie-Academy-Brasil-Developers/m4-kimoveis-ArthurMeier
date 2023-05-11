import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { Repository } from "typeorm";
import { TAllCategoriesResponse } from "../../interfaces/categorieInterface.interface";
import { responseAllRealStateSchema } from "../../schemas/realStateSchema.schema";
import { TAllRealStateResponse } from "../../interfaces/realStateInterfaces.interface";

const listRealStateService = async (): Promise<TAllRealStateResponse> => {
  const realStateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realStates = await realStateRepository.find();

  const realStateList: TAllRealStateResponse =
    responseAllRealStateSchema.parse(realStates);

  return realStateList;
};

export default listRealStateService;
