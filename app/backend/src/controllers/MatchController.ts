import { Request, Response } from 'express';
import MatchService from '../service/MatchService';
import JwtUtils from '../utils/Jwt';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MatchModel from '../models/MatchModel';

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
    if (data.homeTeamId === data.awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    const matchModel = new MatchModel();
    const awayTeam = await matchModel.findById(Number(data.awayTeamId));
    const homeTeam = await matchModel.findById(Number(data.homeTeamId));
    if (awayTeam === null || homeTeam === null) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
   
    const serviceResponse = await this.matchService.createMatch(data);
    res.status(201).json(serviceResponse.data);
  }
}
