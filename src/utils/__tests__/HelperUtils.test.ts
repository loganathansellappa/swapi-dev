import { apiService, capitalize } from '../HelperUtils';

describe('Helpers', () => {
  const OLD_ENV = process.env;
  const env = {
    SWAP_URL: 'test',
  };

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV, ...env };
  });

  it('#apiService should return base url', () => {
    expect(apiService()).toEqual(env.SWAP_URL);
  });

  it('#capitalize  should return capitalized string', () => {
    expect(capitalize('hello')).toEqual('Hello');
  });
});
