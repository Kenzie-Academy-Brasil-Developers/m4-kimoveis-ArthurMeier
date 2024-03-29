import { z } from "zod";
import {
  requestLoginSchema,
  responseLoginSchema,
} from "../schemas/loginSchema.schema";

type TloginRequest = z.infer<typeof requestLoginSchema>;
type TloginResponse = z.infer<typeof responseLoginSchema>;

export { TloginRequest, TloginResponse };
