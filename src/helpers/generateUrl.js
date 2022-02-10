import { ENDPOINT } from './describeVisual.definition';

export const generateUrl = ({ chapter = '1', endpoint = ENDPOINT, key = '', screen = 'S', value = '' } = {}) =>
  `${endpoint}/#${chapter}?headless=true&screen=${screen}&${key.split(':')[0]}=${value}`;
