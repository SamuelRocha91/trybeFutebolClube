import { Response, Request, NextFunction } from 'express';

class Validations {
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const login = req.body;
    if (!login.password || !login.email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const emailRegex = /\S+@\S+\.\S+/;
    // https://horadecodar.com.br/expressao-regular-para-validar-e-mail-javascript-regex/
    if (!emailRegex.test(login.email)) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    if (login.password.length <= 6) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    next();
  }
}

export default Validations;
