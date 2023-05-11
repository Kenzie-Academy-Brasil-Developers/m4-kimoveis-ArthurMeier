import { Router } from "express";
import {
  createRealStateController,
  listRealStateController,
} from "../controllers/realEstate.controllers";
import verifyToken from "../middleware/verifyToken.middleware";
import verifyDataIsValid from "../middleware/verifyDataIsValid.middleware";
import { requestRealStateSchema } from "../schemas/realStateSchema.schema";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  verifyToken({ state: "admin" }),
  verifyDataIsValid(requestRealStateSchema),
  createRealStateController
);
realEstateRoutes.get("", listRealStateController);

export default realEstateRoutes;
