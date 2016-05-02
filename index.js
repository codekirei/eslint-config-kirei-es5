'use strict'

// modules ---------------------------------------------------------------------

const bestPractices = require('./rules/best-practices')
const node = require('./rules/node')
const possibleErrors = require('./rules/possible-errors')
const strictMode = require('./rules/strict-mode')
const stylisticIssues = require('./rules/stylistic-issues')
const variables = require('./rules/variables')

// config ----------------------------------------------------------------------

module.exports = {
  rules: Object.assign(
    {},
    bestPractices,
    node,
    possibleErrors,
    strictMode,
    stylisticIssues,
    variables
  ),
}
