import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeUser from '../database/models/SequelizeUser';

import team from './mocks/Team.mocks';

import teamModel from '../models/TeamModel'
import mockTeam from './mocks/Team.mocks';
import mockLogin from './mocks/Login.mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /teams', function () { 
 it('Verifica se ao fazer uma requisição corretamente para o endpoint "/teams" se o retorno é o esperado', async () => {
  sinon.stub(SequelizeTeam, 'findAll').resolves(team.teams as any);

  const { status, body } = await chai.request(app).get('/teams');

  expect(status).to.equal(200);
  expect(body).to.deep.equal(team.teams);
 });

 it('Verifica se ao fazer uma requisição corretamente para o endpoint "/teams/:id" se o retorno é o esperado', async () => {
  sinon.stub(SequelizeTeam, 'findOne').resolves(team.team as any);

  const { status, body } = await chai.request(app).get('/teams/1');

  expect(status).to.equal(200);
  expect(body).to.deep.equal(team.team);
 })

 it('Verifica se o login não fornecer o email se é possível dar continuidade', async () => {
  const response = await chai.request(app).post('/login').send(mockLogin.loginDataWithinEmail);

  expect(response.status).to.equal(400);
  expect(response.body).to.deep.equal({ "message": "All fields must be filled" });

 });

 it('Verifica se o login não fornecer o password se é possível dar continuidade', async () => {
  const response = await chai.request(app).post('/login').send(mockLogin.loginDataWithinPassword);

  expect(response.status).to.equal(400);
  expect(response.body).to.deep.equal({ "message": "All fields must be filled" });
 });
   afterEach(sinon.restore);
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
