import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import { AppError } from "../errors";

const isValidWorkday = (date: Date): boolean => {
  const day = date.getDay();
  return day > 0 && day < 6;
};

const isValidHour = (hour: number): boolean => {
  return hour >= 8 && hour <= 18;
};

const validSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, hour, realEstateId } = req.body;
  const userId = res.locals.token.id;

  const schedulesRepository = AppDataSource.getRepository(Schedule);

  const existingSchedule = await schedulesRepository
    .createQueryBuilder("schedule")
    .where("schedule.date = :date", { date })
    .andWhere("schedule.realEstate = :realEstateId", { realEstateId })
    .andWhere("schedule.hour = :hour", { hour })
    .getOne();

  if (existingSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const userSchedule = await schedulesRepository
    .createQueryBuilder("schedule")
    .where("schedule.date = :date", { date })
    .andWhere("schedule.hour = :hour", { hour })
    .andWhere("schedule.userId = :userId", { userId })
    .getOne();

  if (userSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const userScheduleAtRealEstate = await schedulesRepository
    .createQueryBuilder("schedule")
    .where("schedule.userId = :userId", { userId })
    .andWhere("schedule.realEstate = :realEstateId", { realEstateId })
    .getOne();

  if (userScheduleAtRealEstate) {
    throw new AppError("User schedule at this real estate already exists", 409);
  }

  const hourNumber = Number(hour.split(":")[0]);
  if (!isValidHour(hourNumber)) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const appointmentDate = new Date(date);
  if (!isValidWorkday(appointmentDate)) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  return next();
};

export default validSchedule;
