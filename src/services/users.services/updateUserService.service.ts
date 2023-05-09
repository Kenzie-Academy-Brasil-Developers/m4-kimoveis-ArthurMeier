import { Repository } from "typeorm";
import {
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/userInterfaces.interface";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { responseUserSchema } from "../../schemas/usersSchema.schemas";

const updateUserService = async (
  userData: TUserUpdateRequest,
  userId: number
): Promise<TUserResponse> => {
  const UserRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await UserRepository.findOneBy({
    id: userId,
  });

  const newUserData: User = UserRepository.create({
    ...oldUserData,
    ...userData,
  });

  await UserRepository.save(newUserData);

  const returnUser: TUserResponse = responseUserSchema.parse(newUserData);

  console.log(returnUser);

  return returnUser;
};

export default updateUserService;
