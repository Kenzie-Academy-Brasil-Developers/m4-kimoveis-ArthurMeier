import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import {
  TloginRequest,
  TloginResponse,
} from "../../interfaces/loginInterface.interface";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

const createLoginService = async (
  payload: TloginRequest
): Promise<TloginResponse> => {
  const UserRepository: Repository<User> = AppDataSource.getRepository(User);

  const userData: User | null = await UserRepository.findOneBy({
    email: payload.email,
  });

  if (!userData) {
    throw new AppError("Invalid credentials", 401);
  }

  const comparePassword = await bcrypt.compare(
    payload.password,
    userData.password
  );

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    { email: userData.email, admin: userData.admin },
    String(process.env.SECRET_KEY!),
    { subject: String(userData.id) }
  );

  return { token };
};

export default createLoginService;
