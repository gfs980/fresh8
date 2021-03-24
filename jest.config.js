module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    "<rootDir>/jest-setup.ts"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.(ts|tsx)$": 'ts-jest'
  }
};
