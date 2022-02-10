import { toMatchImageSnapshot } from 'jest-image-snapshot';

import './__mocks__/matchmedia.mock';

expect.extend({ toMatchImageSnapshot });
