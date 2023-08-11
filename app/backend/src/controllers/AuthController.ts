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

  public async role(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const data = authorization.split(' ');
    if (data.length !== 2) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    try {
      const info = this.jwtUtils.decodeToken(data[1]);
      const user = await this.userModel.findById(Number(info.id));
      if (!user) throw new Error('user invalid');
      return res.status(200).json({ role: user.role });
    } catch (error) {
      res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
