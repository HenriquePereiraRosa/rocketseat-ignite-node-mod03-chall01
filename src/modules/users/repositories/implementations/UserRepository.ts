import { getRepository, Repository } from 'typeorm';
import uuidV4 from 'uuid';

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
      id: uuidV4(),
      first_name,
      last_name,
      email
    });
    console.log("REPO");
    console.log(user);

    await this.repository.save(user);

    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    return this.repository.findOne({ id: user_id });
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
