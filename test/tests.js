'use strict'

// modules ---------------------------------------------------------------------

// node
const assert = require('assert')

// npm
const diff = require('lodash.difference')
const es6Conf = require('eslint-config-kirei-es6')
const eslint = require('eslint')

// local
const es5Conf = require('..')

// setup -----------------------------------------------------------------------

const allRules = Object.keys(eslint.linter.defaults().rules)
const es5Rules = Object.keys(es5Conf.rules)
const es6Rules = Object.keys(es6Conf.es6Rules)

// cases -----------------------------------------------------------------------

exports['eslint-config-kirei-es5'] = {

  'all ES5 rules are configured': () => {
    assert.deepEqual(diff(allRules, [].concat(es5Rules, es6Rules)), [])
  },

  'only ES5 rules are configured': () => {
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
