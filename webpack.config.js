const path = require('path');

module.exports = {
  entry: './src/solem-schedule-card.js',
  mode: 'production',
  output: {
    filename: 'solem-schedule-card.js',
    path: path.resolve(__dirname)
  }
};