import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import verifyEmailNotExist from "../middleware/verifyEmailNotExist.middleware";
import verifyDataIsValid from "../middleware/verifyDataIsValid.middleware";
import { requestUserSchema } from "../schemas/usersSchema.schemas";
import verifyToken from "../middleware/verifyToken.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  verifyEmailNotExist,
  verifyDataIsValid(requestUserSchema),
  createUserController
);
userRoutes.get("", verifyToken({ state: "admin" }), listUsersController);
userRoutes.patch(
  "/:id",
  verifyToken({ state: "update" }),
  updateUserController
);
userRoutes.delete(
  "/:id",
  verifyToken({ state: "update" }),
  deleteUserController
);

export default userRoutes;
