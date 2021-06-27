import { getRepository, Like, Repository } from 'typeorm';

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO, ICreateUserDTO } from '../../model/dtos/userDTO';
import { User } from '../../model/entities/User';
import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    first_name,
    last_name,
    email
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      first_name,
      last_name,
      email
    });

    await this.repository.save(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    return this.repository.findOne({
      where: { id: user_id },
      relations: ["games"],});
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository
      .query('select * from users u order by u.first_name');
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    first_name = '%' + first_name + '%';
    last_name = '%' + last_name + '%';
    return this.repository.query('select * from users u ' +
      ' where u.first_name like $1 ' +
      ' and u.last_name like $2 ',
      [first_name, last_name]);
  }

  async findByEmail(email: string): Promise<User[] | undefined> {
    return this.repository.find({
      email: Like(`%${email}%`)
    });
  }
}
