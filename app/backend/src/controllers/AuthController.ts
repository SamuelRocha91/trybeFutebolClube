import { Request, Response } from 'express';

export default class AuthController {
  static async login(_req: Request, res: Response) {
    return res.status(200).body({
        token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    })
  }
}
