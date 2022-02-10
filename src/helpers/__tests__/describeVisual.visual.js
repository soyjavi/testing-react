import { describeVisual } from '../describeVisual';

const SCREENS = ['S', 'M', 'L'];

SCREENS.forEach((screen) =>
  describeVisual({
    component: `Demo-${screen}`,
    props: {
      default: undefined,
    },
    screen,
  }),
);
