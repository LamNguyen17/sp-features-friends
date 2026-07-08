import type { FriendsRepository } from 'domain/repositories/FriendsRepository';

export class FriendsRepositoryImpl implements FriendsRepository {
  async getFriends(): Promise<any> {
    return [
      {id: 0, name: 'Forest'},
      {id: 1, name: 'LamNguyen'},
      {id: 2, name: 'Forest001'},
      {id: 3, name: 'Forest007'}
    ];
  }
}
