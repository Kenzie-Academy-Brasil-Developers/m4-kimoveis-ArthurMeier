import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { responseAllUsersSchema } from "../../schemas/usersSchema.schemas";
import { TAllUsersResponse } from "../../interfaces/userInterfaces.interface";

const listUsersService = async (): Promise<TAllUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const usersList: TAllUsersResponse = responseAllUsersSchema.parse(users);

  return usersList;
};

export default listUsersService;
