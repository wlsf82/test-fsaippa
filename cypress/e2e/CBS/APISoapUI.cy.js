import apiCredentials from '/TestesAutomatizados/Cypress/cypress/fixtures/apiCredentials.json'

describe('SOAP', function(){
    
it('DA SOAP', () => {
    cy
        .readFile('C:/TestesAutomatizados/Cypress/cypress/fixtures/SOAP DA.xml')
        .then(function (text) {
            cy.postXML(text).then((response) => {
                expect(response.status).to.eq(200)
            const responseBody = response.body
            const parser = new DOMParser();
            const wrapParse = parser.parseFromString(responseBody, "application/xml")
            for (var i = 0; i < 7; i++) {
                let curl = wrapParse.querySelectorAll("CurrentUrl")[i].textContent
                let eurl = wrapParse.querySelectorAll("ExpectedUrl")[i].textContent
                if (curl === Cypress.env('user').errorCURL) {
                    }
                else {
                expect(curl).to.eq(eurl)
                }}
            });
        
        },
        
    )})
})