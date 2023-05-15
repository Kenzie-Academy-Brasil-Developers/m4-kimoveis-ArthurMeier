import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { Repository } from "typeorm";

const listRealStateService = async (): Promise<RealEstate[]> => {
  const realStateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realStates = await realStateRepository.find({
    relations: {
      address: true,
    },
  });

  return realStates;
};

export default listRealStateService;
