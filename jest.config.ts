import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
    globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  testEnvironment: "jsdom"

};
export default config;
