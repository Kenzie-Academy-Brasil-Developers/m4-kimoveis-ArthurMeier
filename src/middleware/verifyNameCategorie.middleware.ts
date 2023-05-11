import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { Repository } from "typeorm";
import { Category, User } from "../entities";
import { AppDataSource } from "../data-source";

const verifyNameCategorie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const exists = await categoryRepository.exist({ where: { name: name } });

  if (exists === true) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export default verifyNameCategorie;
