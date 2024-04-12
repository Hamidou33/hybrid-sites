// jest.config.js (javascript file)
module.exports = {
  projects: [
    {
      preset: 'jest-preset-angular',
      roots: ['src'],
      testMatch: ['**/*.spec.ts'],
      setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    }
    // {
    //   preset: 'ts-jest',
    //   testEnvironment: 'node',
    //   roots: ['api-nest-pando'],
    //   testMatch: ['**/*.spec.ts'],
    // },
  ],
};
