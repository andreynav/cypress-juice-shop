Cypress.Commands.add('loginViaAPI', (email, password) => {
    cy.session('save user token', () => {
        cy.request('POST', 'http://localhost:3000/rest/user/login', {
            email: email,
            password: password
        }).then(({ body }) => {
            window.localStorage.setItem('token', body.token)
        })
    })

})
