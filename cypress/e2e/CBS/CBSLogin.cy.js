import credentials from '/TestesAutomatizados/Cypress/cypress/fixtures/Credentials.json'

describe('LoginCBS', function(){
  beforeEach(() =>{
    cy.intercept('POST', '/rest/security/token').as('token')
   })
 
 
 it('LoginSuccess', function(){
    cy.Login() 
    cy.wait('@token').its('response.statusCode').should('eq',200)
    cy.get('.toast-message').should('have.text', 'Welcome to CBS')
    cy.get('.navbar-right > .dropdown > .dropdown-toggle').should('have.text', credentials.WelcomeToastr)
  })

  it('Login failure', () => {
    cy.visit('/auth/login');
    cy.get('.form-signin-heading').should('have.text', 'Sign in');
    cy.get('#username').type(credentials.username, {log: false});
    cy.get('#password').type(credentials.invalidpassword, {log: false});
    cy.get('#login-bt').click()
    cy.get('.toast-message').should('have.text', 'Informed credentials are invalid!')
    cy.wait('@token').its('response.statusCode').should('eq', 400)
    })
})