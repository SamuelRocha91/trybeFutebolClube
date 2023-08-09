import * as jwt from 'jsonwebtoken';

export type ID = number;

export type Identifiable = { id: ID };

export default class JwtUtils {
  private jwtSecret = process.env.JWT_SECRET || 'secret';

  sign(payload: Identifiable): string {
    return jwt.sign(payload, this.jwtSecret);
  }
}
