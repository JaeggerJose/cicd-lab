import type { TestUserConfig, ViteUserConfig } from 'vitest/config';

type VitestConfig = ViteUserConfig & {
  test?: TestUserConfig;
};

const isCI = process.env.CI === 'true';

const config: VitestConfig = {
  test: {
    exclude: ['dist/**', 'node_modules/**'],
    reporters: isCI ? ['default', 'junit'] : ['default'],
    outputFile: {
      junit: 'reports/junit.xml'
    }
  }
};

export default config;
