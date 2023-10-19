import credentials from '/TestesAutomatizados/Cypress/cypress/fixtures/Credentials.json'
import InvoiceListObjects from '/TestesAutomatizados/Cypress/cypress/factories/InvoiceListObjects'


describe ('Create Order and Check log', () => {
    
    beforeEach(() =>{
        cy.Login(credentials.username, credentials.password);
    });

    it('CreateOrder', () => {
        const isActions = new InvoiceListObjects;
        cy.get('.navbar').contains('Invoice').click();
        cy.expect('url', '/Invoice');
        cy.get('loading', {timeout:15000}).should('not.exist');
        isActions.filterButton();
        cy.get('loading', {timeout:15000}).should('not.exist');
        isActions.statusReady();
        isActions.filterButton();
                
        //#status-filter > ul > li:nth-child(3) > md-checkbox
    })
})