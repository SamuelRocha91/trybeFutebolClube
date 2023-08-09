import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { IUserModel } from '../Interfaces/IUserModel';
import UserModel from '../models/UserModel';
import JwtUtils from '../utils/Jwt';

export default class AuthController {
  private jwtUtils = new JwtUtils();

  constructor(private userModel: IUserModel = new UserModel()) {}

  public async login(req: Request, res: Response) {
    const { email, password } = req.body as { email: string, password: string };
    const user = await this.userModel.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }
    const token = this.jwtUtils.sign({ id: user.id });
    return res.status(200).json({ token });
  }
}
