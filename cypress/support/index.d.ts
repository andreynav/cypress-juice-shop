/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Login via API and extract auth token
         * @example cy.loginViaAPI('email', 'password')
         */

        loginViaAPI(email: string, password: string): Chainable<JQuery<HTMLElement>>
    }
}
