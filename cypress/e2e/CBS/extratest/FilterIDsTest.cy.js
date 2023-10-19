import credentials from '/TestesAutomatizados/Cypress/cypress/fixtures/Credentials.json'

describe.skip ('IDs', () => {
    
    beforeEach(() =>{
         cy.Login(credentials.username, credentials.password)
         cy.intercept('POST', '/rest/api/SubscriptionExport').as('SubExportedFile')
        })
    
    it('INNO-8010 Invoice', () => {
        cy.intercept('POST', '/rest/api/Excel').as('invoiceExportedFile')
        cy.get('.navbar').contains('Invoice').click();
        cy.get('.loading').should('not.exist')
        cy.expect('url', '/Invoice');
        cy.get('#reseller').type('ITGL')
        cy.get('#enduser').type('kaba')
        cy.get('#salesorg').type('4000')
        cy.get('#salesoffice').type('4001')
        cy.get('#invoicenumber').type('6500665446')
        //cy.get('#accountmanager').type('6500001044')
        cy.get('#plant').type('4611')
        cy.get('#billingmonth').type('2023/05')
        //cy.get('#erpinvoicenumber')
        cy.get('#country').select('United Kingdom')
        cy.get('#aggregatedlines').select('Show all invoices')
        cy.get('#subscriptionid').type('SUB1058843-91202199')
        cy.get('#showhistorical').select('No')
        cy.get('#vendor').select('Cisco Annuity')
        //cy.get('#billrun')
        cy.get('#customerpo').type('PO0001881')
        cy.get('#productfamily').type('CISCOANNUITY')
        cy.get('#showbreakdownlink').select('Both')
        //cy.get('#sapinvoicecreatedfrom')
        //cy.get('#sapinvoicecreatedto')
        cy.get('#alternatevendor').type('301084')
        //cy.get('#masterpayer')
        cy.get('#doctype').select('ZOR')
        cy.get('#action-filter').click()
        //cy.wait('@invoiceLoading', {timeout:30000}).its('response.statuscode').should('eq', 200)
        //cy.get('.spinner-container').should('not.exist')
        cy.get('svg',{timeout:30000}).should('not.exist')
        cy.get('#checkallfiltered > .md-container').click()
        cy.get('#action-exportexcel').click()
        cy.get('div.md-dialog-container.ng-scope > md-dialog > form > md-dialog-actions > button.button.button-default.ng-binding').should('have.text', 'Yes').click()
        cy.checkDownload()
    })

    it('INNO-8010 Subscription', () => {
        cy.get('.navbar').contains('Subscription').click();
        cy.get('loading').should('not.exist')
        cy.expect('url', '/Subscription');
        cy.get('#reseller').type('ITGL')
        cy.get('#enduser').type('kaba')
        cy.get('#salesorg').type('4000')
        cy.get('#salesoffice').type('4001')
        cy.get('#invoicenumber').type('6500665446')
        //cy.get('#accountmanager').type('6500001044')
        cy.get('#plant').type('4611')
        cy.get('#billingmonth').type('2023/05')
        cy.get('#country').select('United Kingdom')
        cy.get('#productfamily').type('CISCOANNUITY')
        cy.get('#subscriptionid').type('SUB1058843-91202199')
        cy.get('#vendor').select('Cisco Annuity')
        cy.get('#statusvalid').select('All')
        cy.get('#statusactive').select('All')
        //cy.get('#masterpayer').type('')
        cy.get('#isexpired').select('All')
        cy.get('#action-filter').click()
        cy.get('thead > tr > .checkbox-wrapper').click()
        cy.get('#exportexcel').click()
        cy.wait('@SubExportedFile')
        cy.readFile('cypress/downloads/CBSDataExport.xlsx', 'utf-8')
        
  
    })

    })