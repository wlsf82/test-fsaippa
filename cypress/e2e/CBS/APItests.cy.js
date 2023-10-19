import credentials from '/TestesAutomatizados/Cypress/cypress/fixtures/Credentials.json'
import apiCredentials from '/TestesAutomatizados/Cypress/cypress/fixtures/apiCredentials.json'


describe('APITests', function(){
    beforeEach(() =>{ 
        cy.log(`Testing ${Cypress.env('environment') ? Cypress.env('environment') : 'QA'} environment`)
    })

    it('CBSDeploy_SAPIntegration', function(){
        cy.SAPCBS()
        }),

    it('restDAtest', function(){
        cy.getHelpStatus()
    })       
})