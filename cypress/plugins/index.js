/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {

  on("file:preprocessor",cucumber())
  //logger activation
  on ('task',{
    failed: require('cypress-failed-log/src/failed'),
  })
 
}
