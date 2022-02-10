import { findChapterIndex } from '../findChapterIndex';

const chapters = {
  Button: {},
  Text: {},
  View: {},
};

const indexedChapters = {
  '1. Button': {},
  '2. Text': {},
  '3. View': {},
};

const component = 'Text';

describe('helper:findChapterIndex', () => {
  test('be healthy', () => {
    expect(findChapterIndex).toBeDefined();
  });

  test('default', () => {
    expect(findChapterIndex()).toEqual(0);
  });

  test('with chapters', () => {
    expect(findChapterIndex(chapters, component)).toEqual(2);
  });

  test('with indexed chapters', () => {
    expect(findChapterIndex(indexedChapters, component)).toEqual(2);
  });

  test('without non-exist component', () => {
    expect(findChapterIndex(chapters, 'boton')).toEqual(0);
  });
});
