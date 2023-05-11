import { Request, Response } from "express";
import { TRealStateRequest } from "../interfaces/realStateInterfaces.interface";
import createRealStateService from "../services/realEstate.services/createRealStateService.service";
import listRealStateService from "../services/realEstate.services/listRealStateService.service";

const createRealStateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realStateData: TRealStateRequest = req.body;
  console.log(realStateData);

  const newRealState = await createRealStateService(realStateData);

  return res.status(201).json(newRealState);
};

const listRealStateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const category = await listRealStateService();

  return res.json(category);
};

export { createRealStateController, listRealStateController };
