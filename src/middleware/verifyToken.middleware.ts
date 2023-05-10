import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";

type VerifyUserStateParams = {
  state: "update" | "admin";
};

const verifyToken =
  ({ state }: VerifyUserStateParams) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    let token = req.headers.authorization;

    if (!token) {
      throw new AppError("Missing bearer token", 401);
    }

    token = token.split(" ")[1];

    jwt.verify(
      token,
      String(process.env.SECRET_KEY!),
      (err: any, decoded: any) => {
        if (err) {
          throw new AppError(err.message, 401);
        }

        res.locals.token = {
          admin: decoded.admin,
          id: decoded.sub,
        };
      }
    );
    const { admin, id } = res.locals.token;

    if (state === "admin") {
      if (admin === false) {
        throw new AppError("Insufficient permission", 403);
      }

      return next();
    }

    const userId = parseInt(req.params.id);

    const userRepositorie: Repository<User> = AppDataSource.getRepository(User);

    const exists = await userRepositorie.exist({ where: { id: userId } });

    if (exists === false) {
      throw new AppError("User not found", 404);
    }

    if (id != userId && admin === false) {
      throw new AppError("Insufficient permission", 403);
    }

    return next();
  };

export default verifyToken;
