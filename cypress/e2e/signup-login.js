/* eslint-disable */
describe('Signup Test', () => {
    const randomString = Math.random().toString(36).substring(2)
    const user = {
        username: `auto-${randomString}`,
        email: `${randomString}@gmail.com`,
        password: 'andyn',
        secretAnswer: 'mama'
    }
    beforeEach( () => {
        cy.visit('http://localhost:3000/#/')
        cy.get('h1').contains('Welcome to OWASP Juice Shop!')
        cy.get(".cdk-overlay-backdrop").click(-50, -50, {force: true})
        cy.get('a[aria-label="dismiss cookie message"]').click()
    })

    it('Test valid signup', () => {
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get('a[href="#/register"]').click()

        cy.get('#emailControl').type(user.email)
        cy.get('#passwordControl').type(user.password)
        cy.get('#repeatPasswordControl').type(user.password)
        cy.get('mat-select[name="securityQuestion"]').click()
        cy.get('mat-option span').contains("Mother's maiden name?").click()
        cy.get('#securityAnswerControl').type(user.secretAnswer)
        cy.get('#registerButton').click()

        cy.get('span').contains('Registration completed successfully. You can now log in.').should('be.visible')

    })


})
