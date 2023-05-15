import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TCreateSchedule } from "../../interfaces/scheduleInterface.interface";
import { AppError } from "../../errors";

const createSchedulesService = async (
  scheduleData: TCreateSchedule,
  userId: number
): Promise<object> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const userRepoResult: User | null = await userRepository.findOneBy({
    id: Number(userId),
  });

  if (!userRepoResult) {
    throw new AppError("User not found", 404);
  }

  const realEstateResult: RealEstate | null =
    await realEstateRepository.findOneBy({
      id: Number(scheduleData.realEstateId),
    });

  if (!realEstateResult) {
    throw new AppError("RealEstate not found", 404);
  }

  const createSchedule: Schedule = scheduleRepository.create({
    ...scheduleData,
    realEstate: realEstateResult!,
    user: userRepoResult!,
  });

  await scheduleRepository.save(createSchedule);

  return { message: "Schedule created" };
};
export default createSchedulesService;
