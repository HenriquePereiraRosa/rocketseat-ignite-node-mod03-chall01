import { User } from '../../users/model/entities/User';
import { Game } from '../entities/Game';

export interface IGameRepository {
  findByTitleContaining(title: string): Promise<Game[]>;
  countAllGames(): Promise<[{ count: string }]>;
  findUsersByGameId(id: string): Promise<User[]>;
}
