import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { addressSchemaRequest } from "../schemas/realStateSchema.schema";

const verifyAddressNotExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const address: Address = req.body.address;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const addressExist = await addressRepository.exist({
    where: { zipCode: address.zipCode },
  });

  if (addressExist === true) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};

export default verifyAddressNotExist;
