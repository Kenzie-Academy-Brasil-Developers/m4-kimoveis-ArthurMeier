import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import {
  TUser,
  TUserRequest,
  TUserResponse,
} from "../../interfaces/userInterfaces.interface";
import { hash } from "bcryptjs";
import { responseUserSchema } from "../../schemas/usersSchema.schemas";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepositorie: Repository<User> = AppDataSource.getRepository(User);

  userData.password = await hash(userData.password, 10);

  const user: User = userRepositorie.create(userData);

  await userRepositorie.save(user);

  const newUser: TUserResponse = responseUserSchema.parse(user);

  return newUser;
};

export default createUserService;
