import { IUser } from './IUser';

export interface IUserModel {
  findByEmail(email: string): Promise<IUser | null>
}
