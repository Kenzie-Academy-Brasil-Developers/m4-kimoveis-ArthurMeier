import { z } from "zod";
import { responseUserSchema } from "./usersSchema.schemas";
import { realStateWithoutCategoryId } from "./realStateSchema.schema";

const createScheduleSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
});

const responseSchemaScheduleData = createScheduleSchema.extend({
  id: z.number(),
  userId: z.number(),
});

const allSchemaScheduleData = responseSchemaScheduleData
  .extend({
    realEstate: realStateWithoutCategoryId,
    user: responseUserSchema,
  })
  .omit({
    realEstateId: true,
  });

export {
  createScheduleSchema,
  responseSchemaScheduleData,
  allSchemaScheduleData,
};
