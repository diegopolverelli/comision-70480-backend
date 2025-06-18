import { PruebasMiddleware } from './pruebas.middleware';

describe('PruebasMiddleware', () => {
  it('should be defined', () => {
    expect(new PruebasMiddleware()).toBeDefined();
  });
});
