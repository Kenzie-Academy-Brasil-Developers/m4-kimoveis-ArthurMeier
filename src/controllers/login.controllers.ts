import { Request, Response } from "express";
import {
  TloginRequest,
  TloginResponse,
} from "../interfaces/loginInterface.interface";
import createLoginService from "../services/login.services/createLoginService.service";
const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TloginRequest = req.body;
  const token: TloginResponse = await createLoginService(userData);

  return res.status(200).json(token);
};

export { createLoginController };
