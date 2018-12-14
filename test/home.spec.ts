import { expect } from 'chai';

const request = require('./request-service');
let body: string;

describe('test work /home with ssr', () => {
  it('Should be exist "Главная страница"', async () => {
    body = await request('http://localhost:4000/home');
    return expect(body.includes('Главная страница')).to.equal(true);
  });

  it('Should be exist "home.notranslatewarn"', async () => {
    body = await request('http://localhost:4000/home');
    expect(body.includes('home.notranslatewarn')).to.equal(true);
  });
});
