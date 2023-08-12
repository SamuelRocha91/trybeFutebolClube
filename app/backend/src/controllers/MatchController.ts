import { Request, Response } from 'express';
import MatchService from '../service/MatchService';
import JwtUtils from '../utils/Jwt';
import mapStatusHTTP from '../utils/mapStatusHTTP';

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
    const { id } = req.params;
    await this.matchService.updateMatchById(Number(id));
    return res.status(200).json({ message: 'Finished' });
  }

  public async updateMatchInProgress(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const match = await this.matchService.updateMatchInProgress(Number(id), data);
    if (match.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(match.status)).json(match.data);
    }
    return res.status(200).json(match.data);
  }

  public async createMatchInProgress(req: Request, res: Response) {
    const data = req.body;
    const serviceResponse = await this.matchService.createMatch(data);
    res.status(201).json(serviceResponse.data);
  }
}
