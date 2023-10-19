import credentials from '/TestesAutomatizados/Cypress/cypress/fixtures/Credentials.json'

describe ('My Account', () => {
    
    beforeEach(() =>{
         cy.Login(credentials.username, credentials.password)
         cy.intercept('POST','/rest/api/user/logout').as('logout')
        })
    
    it('MyAccount', () => {
        cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
        cy.get('.navbar-right > .dropdown > .dropdown-menu').should('be.visible')
        cy.get('a[href="/#!/auth/logout"]').click()
        cy.wait('@logout')
    })
})