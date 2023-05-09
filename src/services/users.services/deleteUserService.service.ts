import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

const deleteMovieService = async (userId: number) => {
  const movieRepository: Repository<User> = AppDataSource.getRepository(User);

  await movieRepository.softRemove({
    id: userId,
  });
};

export default deleteMovieService;
