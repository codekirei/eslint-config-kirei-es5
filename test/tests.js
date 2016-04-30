'use strict'

// node modules ----------------------------------------------------------------

const assert = require('assert')

// npm modules -----------------------------------------------------------------

const diff = require('lodash.difference')
const eslint = require('eslint')

// local modules ---------------------------------------------------------------

const bestPractices = require('../rules/best-practices').rules
const node = require('../rules/node').rules
const possibleErrors = require('../rules/possible-errors').rules
const strictMode = require('../rules/strict-mode').rules
const stylisticIssues = require('../rules/stylistic-issues').rules
const variables = require('../rules/variables').rules

// setup -----------------------------------------------------------------------

const eslintRules = Object.keys(eslint.linter.defaults().rules)

const localRules = Object.keys(
  Object.assign(
    {},
    bestPractices,
    node,
    possibleErrors,
    strictMode,
    stylisticIssues,
    variables
  )
)

const es6Rules = [
  'arrow-body-style',
  'arrow-parens',
  'arrow-spacing',
  'constructor-super',
  'generator-star-spacing',
  'no-class-assign',
  'no-confusing-arrow',
  'no-const-assign',
  'no-dupe-class-members',
  'no-duplicate-imports',
  'no-new-symbol',
  'no-restricted-imports',
  'no-this-before-super',
  'no-useless-constructor',
  'no-var',
  'object-shorthand',
  'prefer-arrow-callback',
  'prefer-const',
  'prefer-reflect',
  'prefer-rest-params',
  'prefer-spread',
  'prefer-template',
  'require-yield',
  'template-curly-spacing',
  'yield-star-spacing',
]

// cases -----------------------------------------------------------------------

exports['eslint-config-kirei-es5'] = {

  'all es5 rules are configured': () => {
    assert.deepEqual(diff(eslintRules, [].concat(localRules, es6Rules)), [])
  },

  'only es5 rules are configured': () => {
    assert.deepEqual(diff(localRules, diff(eslintRules, es6Rules)), [])
  },

  'config does not throw': () => {
    const linter = new eslint.CLIEngine({
      useEslintrc: false,
      configFile: './index.js',
    })
    assert.doesNotThrow(() => linter.executeOnText(''))
  },

}
