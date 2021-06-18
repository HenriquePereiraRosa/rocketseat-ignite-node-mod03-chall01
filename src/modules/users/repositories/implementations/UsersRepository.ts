import { getRepository, Repository } from 'typeorm';

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos/user-dto';
import { User } from '../../entities/user-entity';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    // const firstUser = await connection
    //       .getRepository(User)
    //       .createQueryBuilder("user")
    //       .where("user.id = :id", { user_id })
    //       .getOne();

    // return firstUser;
    return new User(); // TODO:
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query(`select * from users order by users.first_name`); // Complete usando raw query
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.repository.query(""); // Complete usando raw query
  }
}
