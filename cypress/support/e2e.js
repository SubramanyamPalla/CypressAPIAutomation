// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import loginPageObjects from "../support/PageObjects/loginPageObjects";
import amazonLoginPageObjects from "../support/PageObjects/amazonLoginPageObjects";
/// <reference types="cypress" />

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-plugin-steps'
require('cypress-xpath');

before(function() {

    cy.wrap('0').as("bearerTocken")
})

afterEach(function () {
    if (this.currentTest.state === 'failed') {
      Cypress.stop()
    }
  })