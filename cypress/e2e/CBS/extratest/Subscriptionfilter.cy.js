import credentials from '/TestesAutomatizados/Cypress/cypress/fixtures/Credentials.json'
import STF from '/TestesAutomatizados/cypress/cypress/fixtures/subTypeFilters.json'
import SSF from '/TestesAutomatizados/cypress/cypress/fixtures/subSelectFilters.json'

describe ('Subscription Filter', () => {
    
    beforeEach(() =>{
         cy.Login(credentials.username, credentials.password)
         cy.intercept('GET', '/rest/api/subscription?query*').as('waitQuery')
         cy.intercept('POST', '/rest/api/SubscriptionExport').as('subExportedFile')
        })
    
        it('filterAndExportSubscriptions', () => {
          cy.navigateToSubscription()
          cy.waitLoading()
          cy.typeSubscriptionFilters(STF.typeFilters)
          cy.selectSubscriptionFilters(SSF.selectFilters)
          cy.clickFilter()
          cy.exportAllSubscriptions()
          })
        })
     
