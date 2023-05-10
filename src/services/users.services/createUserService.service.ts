import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import {
  TUserRequest,
  TUserResponse,
} from "../../interfaces/userInterfaces.interface";
import { responseUserSchema } from "../../schemas/usersSchema.schemas";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepositorie: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepositorie.create(userData);

  await userRepositorie.save(user);

  const newUser: TUserResponse = responseUserSchema.parse(user);

  return newUser;
};

export default createUserService;
