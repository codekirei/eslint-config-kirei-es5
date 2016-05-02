'use strict'

// node modules ----------------------------------------------------------------

const assert = require('assert')

// npm modules -----------------------------------------------------------------

const diff = require('lodash.difference')
const eslint = require('eslint')

// local modules ---------------------------------------------------------------

const localConf = require('..')

// setup -----------------------------------------------------------------------

const allRules = Object.keys(eslint.linter.defaults().rules)
const es5Rules = Object.keys(localConf.rules)

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
    assert.deepEqual(diff(allRules, [].concat(es5Rules, es6Rules)), [])
  },

  'only es5 rules are configured': () => {
    assert.deepEqual(diff(es5Rules, diff(allRules, es6Rules)), [])
  },

  'config does not throw': () => {
    const linter = new eslint.CLIEngine({
      useEslintrc: false,
      configFile: './index.js',
    })
    assert.doesNotThrow(() => linter.executeOnText(''))
  },

}
