import puppeteer from 'puppeteer';

import { DEFAULTS, ENDPOINT, VIEWPORT } from './describeVisual.definition';
import { generateUrl } from './generateUrl';

export const describeVisual = ({
  chapter = '1',
  component = '',
  props = {},
  screen = 'S',
  endpoint = ENDPOINT,
  ...config
} = {}) =>
  describe(component, () => {
    let browser;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        defaultViewport: VIEWPORT[screen] || VIEWPORT.S,
        // ! Disable this line if you use a Apple Silicon ----------------------------
        // executablePath: '/opt/homebrew/bin/chromium',
        // ! -------------------------------------------------------------------------
      });
    });

    Object.keys(props).forEach((key) =>
      test(`prop:${key}`, async () => {
        jest.setTimeout(30000);
        const page = await browser.newPage();

        await page.goto(generateUrl({ chapter, endpoint, key, screen, value: props[key] }), {
          timeout: 20000,
          waitUntil: ['load', 'networkidle0'],
        });

        expect(await page.screenshot()).toMatchImageSnapshot({ ...DEFAULTS, ...config });
      }),
    );

    afterAll(async () => {
      await browser.close();
    });
  });
