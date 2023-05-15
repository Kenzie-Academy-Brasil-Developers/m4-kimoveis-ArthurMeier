import { z } from "zod";
import { Repository } from "typeorm";
import { Schedule } from "../entities";
import {
  allSchemaScheduleData,
  createScheduleSchema,
  responseSchemaScheduleData,
} from "../schemas/scheduleSchema.schema";

type TCreateSchedule = z.infer<typeof createScheduleSchema>;
type TReturnSchedule = z.infer<typeof responseSchemaScheduleData>;
type TAllSchedule = z.infer<typeof allSchemaScheduleData>;
type TRepositorySchedule = Repository<Schedule>;

export { TCreateSchedule, TReturnSchedule, TAllSchedule, TRepositorySchedule };
