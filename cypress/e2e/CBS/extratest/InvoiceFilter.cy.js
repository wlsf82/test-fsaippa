import credentials from '/TestesAutomatizados/Cypress/cypress/fixtures/Credentials.json'
import TF from '/TestesAutomatizados/cypress/cypress/fixtures/typeFilters.json'
import SF from '/TestesAutomatizados/cypress/cypress/fixtures/selectFilters.json'

describe ('Filtro Invoice', () => {
    
    beforeEach(() =>{
         cy.Login(credentials.username, credentials.password)
         cy.intercept('POST', '/rest/api/Excel').as('invoiceExportedFile')
         cy.intercept('GET', '/rest/api/invoice?query*').as('waitQuery')
        })
    
    it('Filtrar e exportar Invoices', () => {
        cy.navigateToInvoice()
        cy.waitLoading()
        cy.typeInvoiceFilters(TF.typeFilters)
        cy.selectInvoiceFilters(SF.selectFilters)
        cy.clickFilter()
        cy.exportInvoice()
        })
      })
