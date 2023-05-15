import { Request, Response } from "express";
import createSchedulesService from "../services/schedules.services/createSchedulesService.service";
import listSchedulesService from "../services/schedules.services/listSchedulesService.service";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.token.id;
  const schedule = req.body;

  const newSchedule = await createSchedulesService(schedule, userId);

  return res.status(201).json(newSchedule);
};

const listScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realStateId = parseInt(req.params.id);

  const listSchedules = await listSchedulesService(realStateId);

  return res.json(listSchedules);
};

export { createSchedulesController, listScheduleController };
