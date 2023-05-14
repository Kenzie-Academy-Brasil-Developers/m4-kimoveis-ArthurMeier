import { Router } from "express";
import {
  createRealStateController,
  listRealStateController,
} from "../controllers/realEstate.controllers";
import verifyToken from "../middleware/verifyToken.middleware";
import verifyDataIsValid from "../middleware/verifyDataIsValid.middleware";
import { requestRealStateSchema } from "../schemas/realStateSchema.schema";
import verifyCategoryExistFromRealEstate from "../middleware/verifyCategoryExistFromRealEstate.middleware";
import verifyAddressNotExist from "../middleware/verifyAddressNotExist.middleware";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  verifyToken({ state: "admin" }),
  verifyDataIsValid(requestRealStateSchema),
  verifyCategoryExistFromRealEstate,
  verifyAddressNotExist,
  createRealStateController
);
realEstateRoutes.get("", listRealStateController);

export default realEstateRoutes;
