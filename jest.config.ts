/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'babel-jest', // Babel only used in Jest. Vite uses esbuild internally
    },
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer',
        '^.+\\.(css|less|scss)$': 'babel-jest',
        '^~/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: ['/node_modules/', 'dist'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,js,tsx,jsx}'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'cobertura', 'text-summary', 'clover', 'lcov'],
    coveragePathIgnorePatterns: ['/node_modules/', 'dist'],
    coverageThreshold: {
        global: {
            statements: 70,
            branches: 65,
            lines: 70,
            functions: 65,
        },
    },
};
