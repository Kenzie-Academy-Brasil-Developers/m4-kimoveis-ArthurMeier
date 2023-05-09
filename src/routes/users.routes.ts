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

const userRoutes: Router = Router();

userRoutes.post(
  "",
  verifyEmailNotExist,
  verifyDataIsValid(requestUserSchema),
  createUserController
);
userRoutes.get("", listUsersController);
userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/:id", deleteUserController);

export default userRoutes;
