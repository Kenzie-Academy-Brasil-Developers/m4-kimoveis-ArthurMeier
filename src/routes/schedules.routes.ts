import { Router } from "express";
import verifyToken from "../middleware/verifyToken.middleware";
import verifyDataIsValid from "../middleware/verifyDataIsValid.middleware";
import verifySchedule from "../middleware/verifySchedule.middleware";
import { createScheduleSchema } from "../schemas/scheduleSchema.schema";
import {
  createSchedulesController,
  listScheduleController,
} from "../controllers/schedules.controller";
import verifyTokenForSchedule from "../middleware/verifyTokenForSchedule.middleware";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  verifyTokenForSchedule,
  verifyDataIsValid(createScheduleSchema),
  verifySchedule,
  createSchedulesController
);
schedulesRoutes.get(
  "/realEstate/:id",
  verifyToken({ state: "admin" }),
  listScheduleController
);

export default schedulesRoutes;
