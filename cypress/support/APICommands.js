//CBS SAP Integration test
Cypress.Commands.add('SAPCBS', () => {
  cy.log(`Logging into ${Cypress.env('environment') ? Cypress.env('environment') : 'QA'} environment`)  
  Cypress.env('user', Cypress.env(Cypress.env('environment')))
    
    cy.request({
        method: 'GET', 
        url: Cypress.env('user', 'urlToken'),
        form: true,
        body: {
            grant_type: 'password',
            username: Cypress.env('user').username,
            password: Cypress.env('user').password,
        }
        }).as('token'),
    //Checks for successfull request
    cy.get('@token').should((response) => {
        expect(response.status).to.eq(200),
        expect(response.body).to.have.property('access_token')
    })
    //Gets token information to be used in new request
    cy.get('@token').then((response) => {
        const accessToken = response.body.access_token;
        cy.request({
            method: 'GET', 
            url: Cypress.env('user').urlService,
            headers: {
                    authorization: `Bearer ${accessToken}`, 
                    'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then((response) => {
            expect(response.status).to.eq(200),
            expect(response.body).to.have.property('SAPInstance').to.eq(Cypress.env('SAPInstance'))
            expect(response.body).to.have.property('SAPUser').to.eq('VRCLDRFC')
            expect(response.body).to.have.property('IsSapConnectionOk').to.eq(true)
            expect(response.body).to.have.property('InvoiceWebserviceInstance').to.eq(Cypress.env('InvoiceWebserviceInstance'))
            expect(response.body).to.have.property('LegacyInvoiceWebserviceInstance').to.eq(Cypress.env('LegacyInvoiceWebserviceInstance'))
            expect(response.body).to.have.property('InvoiceWebserviceUser').to.eq('VRCLDRFC')
            expect(response.body).to.have.property('IsInvoiceWebserviceOK').to.eq(true)
        })        
    })
}),

Cypress.Commands.add('getHelpStatus', () => {
  cy.log(`Logging into ${Cypress.env('environment') ? Cypress.env('environment') : 'QA'} environment`)
  Cypress.env('user', Cypress.env(Cypress.env('environment')))
    cy.request('GET', Cypress.env('user').helpStatus).then((response) => {
        cy.wrap(response.body).each((app) => {
            if (app.CurrentUrl === Cypress.env('user').errorURL) return
            expect(app.CurrentUrl).to.eq(app.ExpectedUrl)
        })                  
    });
})       

Cypress.Commands.add('postXML', (text) => {
  cy.log(`Logging into ${Cypress.env('environment') ? Cypress.env('environment') : 'QA'} environment`)
  Cypress.env('user', Cypress.env(Cypress.env('environment')))
    return cy.request({
        url: Cypress.env('user').soapURL,
        method: 'POST',
        body: text,
        headers: {
            'content-type': 'text/xml; charset=UTF-8',
            'soapAction': 'http://tempuri.org/IRenewalsService/GetHelpStatus'
            }
    })
})