'use strict'

module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/node.js',
    './rules/possible-errors.js',
    './rules/strict-mode.js',
    './rules/stylistic-issues.js',
    './rules/variables.js',
  ].map(require.resolve),
}
