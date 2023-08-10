import { Request, Response } from 'express';
import MatchService from '../service/MatchService';

export default class MatchController {
  constructor(
    private bookService = new MatchService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const serviceResponse = await this.bookService.getAllMatches();
    res.status(201).json(serviceResponse.data);
  }
}
