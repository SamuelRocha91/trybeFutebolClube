/* import UserModel from '../models/UserModel';
import { IUser } from '../Interfaces/IUser';
import { IUserModel } from '../Interfaces/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async getUserByEmail(email: string): Promise<ServiceResponse<IUser>> {
    const user = await this.userModel.findByEmail(email);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'Invalid email or password' } };

    return { status: 'SUCCESSFUL', data: user };
  }
}
 */
