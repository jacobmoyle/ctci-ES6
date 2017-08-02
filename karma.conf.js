var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'app/tests/**/*.test.jsx',
      'app/tests/**/*.test.js'
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'],
      'app/tests/**/*.test.js': ['webpack', 'sourcemap']

    },
    reporters: ['mocha'],
    client: {
      captureConsole: true,
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
