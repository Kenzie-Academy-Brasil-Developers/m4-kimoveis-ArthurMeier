import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";

const verifyCategoryExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryId: number = parseInt(req.params.id);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const exists = await categoryRepository.exist({
    where: { id: categoryId },
  });

  if (exists === false) {
    throw new AppError("Category not found", 404);
  }

  res.locals.category = await categoryRepository.findOne({
    where: { id: categoryId },
  });

  return next();
};

export default verifyCategoryExist;
