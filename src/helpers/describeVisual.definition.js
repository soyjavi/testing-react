const DEFAULTS = {
  customDiffConfig: { threshold: 0.25 },
  // failureThreshold: 1,
};

const ENDPOINT = 'http://localhost:19006';

const VIEWPORT = {
  S: { width: 375, height: 667 },
  M: { width: 768, height: 1024 },
  L: { width: 1280, height: 800 },
};

export { DEFAULTS, ENDPOINT, VIEWPORT };
