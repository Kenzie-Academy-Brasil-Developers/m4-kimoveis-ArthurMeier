import { Request, Response } from "express";
import { TCategoryRequest } from "../interfaces/categorieInterface.interface";
import createCategorieService from "../services/categories.services/createCategorieService.service";
import listCategoriesService from "../services/categories.services/listCategoryService.service";
import retrieveAllRealStateInCategoryService from "../services/categories.services/retrieveAllRealStateInCategoryService.service";

const createCategorieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categorieData: TCategoryRequest = req.body;

  const newCategorie = await createCategorieService(categorieData);

  return res.status(201).json(newCategorie);
};

const listCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const category = await listCategoriesService();

  return res.json(category);
};

const retriveAllRealStateInCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryId = parseInt(req.params.id);

  const realEstateList = await retrieveAllRealStateInCategoryService(
    categoryId
  );

  return res.json(realEstateList);
};

export {
  createCategorieController,
  listCategoriesController,
  retriveAllRealStateInCategoryController,
};
