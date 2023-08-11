import { Request, Response } from 'express';
import MatchService from '../service/MatchService';
import JwtUtils from '../utils/Jwt';

export default class MatchController {
  private jwtUtils = new JwtUtils();

  constructor(
    private matchService = new MatchService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress === undefined) {
      const serviceResponse = await this.matchService.getAllMatches();
      return res.status(201).json(serviceResponse.data);
    }
    const bool = inProgress === 'true';
    const serviceResponse = await this.matchService.getMatchesByInProgress(bool);
    return res.status(201).json(serviceResponse.data);
  }

  public async finishMatchInProgress(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const data = authorization.split(' ');
    if (data.length !== 2) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    try {
      const { id } = req.params;
      const match = await this.matchService.updateMatchById(Number(id));
      if (!match) throw new Error('user invalid');
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
