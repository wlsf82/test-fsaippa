/// <reference types="cypress" />

describe('Teste Login', function () {
    beforeEach(() => {
      cy.visit('https://dmc-qa.na.westcongrp.com:9096/#!/auth/login')
      cy.intercept('POST', 'https://dmc-qa.na.westcongrp.com:9096/api/security/token').as('token')
      cy.intercept('GET', 'https://dmc-qa.na.westcongrp.com:9096/api/user/permissions?*').as('permission')
    })
  
    it('Acessa o DMC e faz o login', function () {
      cy.title('Renewals DMC')
      cy.get('[ng-model="user.login"]')
        .type('carlos.eduardo77')
        .should('have.value', 'carlos.eduardo77')
  
      cy.get('[ng-model="user.password"]', {log: false})
        .type('Cadu123456@@', { log: false })
        .should('have.value', 'Cadu123456@@', {log: false})
  
      cy.get('.btn')
        .click()
  
      cy.wait('@token')
        .its('response.statusCode')
        .should('eq', 200)
  
      cy.wait('@permission')
        .its('response.statusCode')
        .should('eq', 200)
  
      cy.get('.img-cabecalho')
        .should('be.visible')
    })
})