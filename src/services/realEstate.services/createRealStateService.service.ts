import { Repository } from "typeorm";
import { Response } from "express";
import { Address, RealEstate } from "../../entities";
import {
  TAddress,
  TAddressRequest,
  TRealStateInterface,
  TRealStateRequest,
} from "../../interfaces/realStateInterfaces.interface";
import { AppDataSource } from "../../data-source";
import {
  realStateSchema,
  realStateWithoutCategoryId,
} from "../../schemas/realStateSchema.schema";
import { TCategoryResponse } from "../../interfaces/categorieInterface.interface";

const createRealStateService = async (
  realStateData: TRealStateRequest,
  category: TCategoryResponse
) => {
  const address: TAddressRequest = realStateData.address!;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const realStateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const newAddress: Address = addressRepository.create(address);

  await addressRepository.save(newAddress);

  const newRealState: RealEstate = realStateRepository.create({
    ...realStateData,
    address: newAddress,
    category: category,
  });

  await realStateRepository.save(newRealState);

  const realEstate = realStateWithoutCategoryId.parse(newRealState);

  return realEstate;
};

export default createRealStateService;
