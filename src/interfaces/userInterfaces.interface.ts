import { z } from "zod";
import {
  userSchema,
  requestUserSchema,
  responseUserSchema,
  responseAllUsersSchema,
} from "../schemas/usersSchema.schemas";
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof requestUserSchema>;
type TUserResponse = z.infer<typeof responseUserSchema>;
type TAllUsersResponse = z.infer<typeof responseAllUsersSchema>;
type TUserUpdateRequest = DeepPartial<TUserRequest>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TAllUsersResponse,
  TUserUpdateRequest,
};
