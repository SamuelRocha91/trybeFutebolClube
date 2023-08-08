import { NextFunction, Request, Response } from 'express';

class Validations {
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const login = req.body;
    const requiredKeys = ['email', 'password'];
    const notFoundKey = requiredKeys.find((key) => !(key in login));
    if (notFoundKey) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail acesso 06/08 às 20:49
    if (!emailRegex.test(login.email)) {
      return res.status(400).json({ message: `${notFoundKey} is required` });
    }
    if (login.password.length <= 6) {
      return res.status(400).json({ message: `${notFoundKey} is required` });
    }
    next();
  }
}

export default Validations;
