import { getRepository, ILike, Repository } from 'typeorm';

import { User } from '../../../users/model/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }
  async create(title: string): Promise<Game> {
    const game = this.repository.create({
      title
    });

    await this.repository.save(game);
    return game;
  }

  async findByTitle(param: string): Promise<Game[]> {
    return this.repository.find({
      title: param
    });
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    return this.repository.find({
      title: ILike(`%${param}%`)
    });
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository
      .query('select count(g.id) from games g');
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    return await this.repository.createQueryBuilder()
      .relation(Game, "users")
      .of(id)
      .loadMany();
  }
}
