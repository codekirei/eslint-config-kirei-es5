'use strict'

// node modules ----------------------------------------------------------------

const fs = require('fs')
const path = require('path')
const assert = require('assert')

// npm modules -----------------------------------------------------------------

const diff = require('lodash.difference')

// local modules ---------------------------------------------------------------

const myRules = Object.keys(
  Object.assign(
    {},
    require('../rules/best-practices').rules,
    require('../rules/node').rules,
    require('../rules/possible-errors').rules,
    require('../rules/strict-mode').rules,
    require('../rules/stylistic-issues').rules,
    require('../rules/variables').rules
  )
)

// setup -----------------------------------------------------------------------

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

let ESLintRules

// cases -----------------------------------------------------------------------

exports['eslint-config-kirei-es5'] = {

  'before': () => {
    ESLintRules = fs.readdirSync('./node_modules/eslint/lib/rules')
      .map(rule => path.basename(rule, '.js'))
  },

  'all es5 rules are configured': () => {
    const unconfiguredRules = diff(ESLintRules, [].concat(myRules, es6Rules))
    assert.deepEqual(unconfiguredRules, [])
  },

}
