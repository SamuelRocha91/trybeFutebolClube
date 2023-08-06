import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeTeam from '../database/models/SequelizeTeam';

import team from './mocks/Team.mocks';

import teamModel from '../models/TeamModel'
import mockTeam from './mocks/Team.mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /teams', function () { 
  beforeEach(function () { sinon.restore(); });
 it('Verifica se ao fazer uma requisição corretamente para o endpoint "/teams" se o retorno é o esperado', async () => {
  sinon.stub(SequelizeTeam, 'findOne').resolves(team.teams as any);

  const { status, body } = await chai.request(app).get('/teams');

  expect(status).to.equal(200);
  expect(body).to.deep.equal(team.teams);
 });

 it('Verifica se ao fazer uma requisição corretamente para o endpoint "/teams/:id" se o retorno é o esperado', async () => {
  sinon.stub(SequelizeTeam, 'findAll').resolves(team.teams as any);

  const { status, body } = await chai.request(app).get('/teams/1');

  expect(status).to.equal(200);
  expect(body).to.deep.equal(team.teams);
 })
});


// describe('Seu teste', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

 // it('Seu sub-teste', () => {
   // expect(false).to.be.eq(true);
  // });
// });
