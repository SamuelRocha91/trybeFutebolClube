import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import teamModel from '../database/models/team.model'
import mockTeam from './mocks/team.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /teams', function () { 
  beforeEach(function () { sinon.restore(); });
 it('Verifica se ao fazer uma requisição corretamente para o endpoint "/teams" se o retorno é o esperado', async () => {
  const mockFindAllReturn = teamModel.bulkBuild(mockTeam.validGetTeam);
    sinon.stub(teamModel, 'findAll').resolves(mockFindAllReturn);

    // Act
    const httpResponse = await chai.request(app).get('/teams');

    // Assert
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal(mockFindAllReturn)
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
