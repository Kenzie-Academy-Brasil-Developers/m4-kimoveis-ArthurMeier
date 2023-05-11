import { Router } from "express";
import verifyToken from "../middleware/verifyToken.middleware";
import verifyNameCategorie from "../middleware/verifyNameCategorie.middleware";
import {
  createCategorieController,
  listCategoriesController,
  retriveAllRealStateInCategoryController,
} from "../controllers/categories.controllers";
import verifyCategoryExist from "../middleware/verifyCategoryExist.middleware";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  verifyToken({ state: "admin" }),
  verifyNameCategorie,
  createCategorieController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get(
  "/:id/realEstate",
  verifyCategoryExist,
  retriveAllRealStateInCategoryController
);

export default categoriesRoutes;
