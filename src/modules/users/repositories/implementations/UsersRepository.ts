import { getRepository, ILike, Repository } from 'typeorm';

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO, ICreateUserDTO } from '../../model/dtos/userDTO';
import { User } from '../../model/entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    first_name,
    last_name,
    email,
    games
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      first_name,
      last_name,
      email,
      games
    });

    await this.repository.save(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findUserWithGamesById({
    user_id
  }: IFindUserWithGamesDTO): Promise<User | undefined> {
    return this.repository.findOne({
      where: { id: user_id },
      relations: ["games"]
    });
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository
      .query('select * from users u order by first_name');
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    first_name = '%' + first_name + '%';
    last_name = '%' + last_name + '%';
    return this.repository.query('select * from users u ' +
      ' where LOWER(u.first_name) like LOWER($1) ' +
      ' and LOWER(u.last_name) like LOWER($2) ',
      [first_name, last_name]);
  }

  async findByEmail(email: string): Promise<User[] | undefined> {
    return this.repository.find({
      email: ILike(`%${email}%`)
    });
  }
}
