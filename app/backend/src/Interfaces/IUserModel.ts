import { IUser } from './IUser';

export interface IUserModel {
  findByEmail(email: string): Promise<IUser | null>
  findById(id: IUser['id']): Promise<IUser | null>
}
