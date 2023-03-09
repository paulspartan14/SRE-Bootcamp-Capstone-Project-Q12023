import chai from 'chai';
import { loginFunction } from '../services/login'


const expect = chai.expect;

describe('loginFunction()', function () {
  it('Test login (success)', async function () {
    const token = await loginFunction("admin", "secret")
    expect(typeof token).to.be.equal('string');
  });

  it('Test login (failed)', async function () {
    const token = await loginFunction("admin", "secret123")
    expect(token).to.be.equal(null);
  });
});

