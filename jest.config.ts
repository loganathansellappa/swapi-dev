/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest', // Babel only used in Jest. Vite uses esbuild internally
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
  testPathIgnorePatterns: ['/node_modules/', 'dist', '@types'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js,tsx,jsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'cobertura', 'text-summary', 'clover', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/', 'dist'],
};
