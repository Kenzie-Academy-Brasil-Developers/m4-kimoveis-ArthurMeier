import { z } from "zod";
import {
  addressSchemaRequest,
  addressSchema,
  realStateSchema,
  requestRealStateSchema,
  responseAllRealStateSchema,
} from "../schemas/realStateSchema.schema";

type TRealStateInterface = z.infer<typeof realStateSchema>;
type TAllRealStateResponse = z.infer<typeof responseAllRealStateSchema>;
type TRealStateRequest = z.infer<typeof requestRealStateSchema>;
type TAddress = z.infer<typeof addressSchema>;
type TAddressRequest = z.infer<typeof addressSchemaRequest>;

export {
  TAllRealStateResponse,
  TRealStateInterface,
  TRealStateRequest,
  TAddress,
  TAddressRequest,
};
