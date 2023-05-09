import { Request, Response } from "express";
import createUserService from "../services/users.services/createUserService.service";
import {
  TUserRequest,
  TUserUpdateRequest,
} from "../interfaces/userInterfaces.interface";
import listUsersService from "../services/users.services/listUsersService.service";
import updateUserService from "../services/users.services/updateUserService.service";
import deleteMovieService from "../services/users.services/deleteUserService.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUsersService();

  console.log(users);

  return res.json(users);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserUpdateRequest = req.body;
  const userId: number = parseInt(req.params.id);

  const newUserData = await updateUserService(userData, userId);

  return res.json(newUserData);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  const deleteUser = await deleteMovieService(userId);

  return res.status(204).json();
};

export {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
};
