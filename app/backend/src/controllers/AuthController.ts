import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { IUserModel } from '../Interfaces/IUserModel';
import UserModel from '../models/UserModel';

export default class AuthController {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async login(req: Request, res: Response) {
    const { email } = req.body as { email: string };
    const user = await this.userModel.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const jwtSecret = process.env.JWT_SECRET || 'segredo';
    const token = jwt.sign({ id: user.id }, jwtSecret);
    return res.status(200).json({ token });
  }
}
