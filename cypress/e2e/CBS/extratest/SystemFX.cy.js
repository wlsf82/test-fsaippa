import credentials from '/TestesAutomatizados/Cypress/cypress/fixtures/Credentials.json'

describe('FX Update', () => {
  beforeEach(() => {
    cy.Login(credentials.username, credentials.password);
    cy.intercept('GET', '/rest/api/fxrate?fullDatagrid=false').as('FXTable')
  });

  it('Access System FX and check date', () => {
    cy.navigateToSystemFX();
    cy.wait('@FXTable');
    cy.get('.datagrid > form').type('USD');
    cy.get('form > input').should('have.value','USD');
    cy.get('tbody').contains('USD');
    cy.get('td > button').should('not.be.visible');
    cy.get('td.ng-binding.ng-scope').each(($el) => {
        cy.wrap($el).invoke('text')
        .then(actualDateText => {
        const dayjs = require('dayjs');
        const todaysDate = new Date();
        const limitDate = dayjs().subtract(3, 'day').toDate();
        const actualDate = dayjs(actualDateText, 'YYYY/MM/DD').toDate();
        expect(actualDate).to.be.lte(todaysDate);
        expect(actualDate).to.be.greaterThan(limitDate);
      });
    cy.get('tbody').contains('USD');
    });
  });
});
