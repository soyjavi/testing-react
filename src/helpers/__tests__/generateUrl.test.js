import { generateUrl } from '../generateUrl';

const chapter = '2';
const endpoint = 'https://soyjavi';
const key = 'color';
const screen = 'M';
const value = 'pink';

describe('helper:generateUrl', () => {
  test('be healthy', () => {
    expect(generateUrl).toBeDefined();
  });

  test('default', () => {
    expect(generateUrl()).toEqual('http://localhost:19006/#1?headless=true&screen=S&=');
  });

  test('property "chapter"', () => {
    expect(generateUrl({ chapter })).toEqual(`http://localhost:19006/#${chapter}?headless=true&screen=S&=`);
  });

  test('property "endpoint"', () => {
    expect(generateUrl({ endpoint })).toEqual(`${endpoint}/#1?headless=true&screen=S&=`);
  });

  test('property "key"', () => {
    expect(generateUrl({ key })).toEqual(`http://localhost:19006/#1?headless=true&screen=S&${key}=`);
  });

  test('property "screen"', () => {
    expect(generateUrl({ screen })).toEqual(`http://localhost:19006/#1?headless=true&screen=${screen}&=`);
  });

  test('property "value"', () => {
    expect(generateUrl({ value })).toEqual(`http://localhost:19006/#1?headless=true&screen=S&=${value}`);
  });

  test('all property', () => {
    expect(generateUrl({ chapter, endpoint, key, screen, value })).toEqual(
      `${endpoint}/#${chapter}?headless=true&screen=${screen}&${key}=${value}`,
    );
  });
});
