module.exports = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  preset: 'ts-jest',
  roots: ['<rootDir>/dev/test/'],
  moduleNameMapper: {
    '^~/(.+)$': '<rootDir>/src/$1',
  },
};
