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
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser: TUserResponse = responseUserSchema.parse(user);

  return newUser;
};

export default createUserService;
