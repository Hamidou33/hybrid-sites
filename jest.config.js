// jest.config.js (javascript file)
module.exports = {
  // preset: 'jest-preset-angular',
  // setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  // roots: ['src'],
  // testMatch: ['**/*.spec.ts']
  // Chemins d'accès aux fichiers de test
  // testMatch: [
  //   '<rootDir>/src/**/*.spec.(ts|tsx|js|jsx)',
  //   '<rootDir>/api-nest-pando/**/*.spec.(ts|tsx|js|jsx)',
  // ],
  //
  // // Chemins d'accès aux fichiers à ignorer
  // testPathIgnorePatterns: [
  //   '<rootDir>/node_modules/',
  // ],
  //
  // // Configuration spécifique à TypeScript (si utilisé)
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  //
  // // Configuration des modules pour la résolution des chemins
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1',
  //   '^api/(.*)$': '<rootDir>/api-nest-pando/$1',
  // }

  projects: [
    {
      preset: 'jest-preset-angular',
      roots: ['src'],
      testMatch: ['**/*.spec.ts'],
      setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    },
    {
      preset: 'ts-jest',
      testEnvironment: 'node',
      roots: ['api-nest-pando'],
      testMatch: ['**/*.spec.ts'],
    },
  ],
};
