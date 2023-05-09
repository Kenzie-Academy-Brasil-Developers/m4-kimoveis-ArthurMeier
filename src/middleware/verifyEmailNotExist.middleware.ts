import { NextFunction, Request, Response } from "express";
import { QueryConfig, QueryResult } from "pg";
import { AppError } from "../errors";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";

type TEmail = {
  email: string;
};

const verifyEmailNotExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email }: TEmail = req.body;

  if (!!email) {
    const userRepositorie: Repository<User> = AppDataSource.getRepository(User);

    const exists = await userRepositorie.exist({ where: { email: email } });

    if (exists === true) {
      throw new AppError("Email already exists", 409);
    }
  }

  return next();
};

export default verifyEmailNotExist;
