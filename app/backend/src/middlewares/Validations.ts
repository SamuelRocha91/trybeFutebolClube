import { Response, Request, NextFunction } from 'express';

const TOKEN_NOT_FOUND = 'Token not found';
const TOKEN_MUST_BE_VALID = 'Token must be a valid token';

class Validations {
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const login = req.body;
    if (!login.password || !login.email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const emailRegex = /\S+@\S+\.\S+/;
    // https://horadecodar.com.br/expressao-regular-para-validar-e-mail-javascript-regex/
    if (!emailRegex.test(login.email)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (login.password.length <= 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    next();
  }

  static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: TOKEN_NOT_FOUND });
    }
    const info = authorization.split(' ');
    if (info.length !== 2) {
      return res.status(401).json({ message: TOKEN_MUST_BE_VALID });
    }
    next();
  }
}

export default Validations;
