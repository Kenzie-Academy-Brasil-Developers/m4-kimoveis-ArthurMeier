import { Repository } from "typeorm";
import { Address, RealEstate } from "../../entities";
import {
  TAddress,
  TAddressRequest,
  TRealStateInterface,
  TRealStateRequest,
} from "../../interfaces/realStateInterfaces.interface";
import { AppDataSource } from "../../data-source";
import { realStateSchema } from "../../schemas/realStateSchema.schema";

const createRealStateService = async (realStateData: TRealStateRequest) => {
  const address: TAddressRequest = realStateData.address;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const newAddress: Address = addressRepository.create();

  await addressRepository.save(newAddress);

  const realStateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const newRealState: RealEstate = realStateRepository.create();

  await realStateRepository.save(newRealState);

  const newUser: TRealStateInterface = realStateSchema.parse(newRealState);

  return newUser;
};

export default createRealStateService;
