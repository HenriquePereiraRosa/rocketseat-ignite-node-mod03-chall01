import { User } from '../../users/model/entities/User';
import { Game } from '../entities/Game';

export interface IGamesRepository {
  create(title: string): Promise<Game>;
  findByTitle(title: string): Promise<Game[]>;
  findByTitleContaining(title: string): Promise<Game[]>;
  countAllGames(): Promise<[{ count: string }]>;
  findUsersByGameId(id: string): Promise<User[]>;
}
