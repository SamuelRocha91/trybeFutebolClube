import { Request, Response } from 'express';
import MatchService from '../service/MatchService';

export default class MatchController {
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
}
