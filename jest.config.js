// look here for main set up https://github.com/zeit/next.js/tree/master/examples/with-jest
// here for scss exclusion https://jestjs.io/docs/en/webpack.html
module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
