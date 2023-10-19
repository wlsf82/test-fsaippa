   
//**Login**
Cypress.Commands.add('Login', () => {
  cy.log(`Logging into ${Cypress.env('environment') ? Cypress.env('environment') : 'QA'} environment`)
  Cypress.env('user', Cypress.env(Cypress.env('environment')))

    cy.visit('/auth/login');
    cy.get('.form-signin-heading').should('have.text', 'Sign in');
    cy.get('#username').type(Cypress.env('user').username, {log: false});
    cy.get('#password').type(Cypress.env('user').password, {log: false});
    cy.get('#login-bt').click();
  })

  //**Dashbaord */
  Cypress.Commands.add("navigateToSubscription", () => {
    cy.get('.navbar').contains('Subscription').click();
    cy.url().should('include', '/subscription');
    cy.get(".svg").should("not.exist");
  });

 Cypress.Commands.add("navigateToInvoice", () => {
    cy.get('.navbar').contains('Invoice').click();
    cy.url().should('include', '/invoice');
    cy.get(".svg").should("not.exist");
  });

  Cypress.Commands.add("navigateToFileUpload", () => {
    cy.get('.navbar').contains('Upload files').click();
    cy.url().should('include', '/upload-file');
    cy.get(".svg").should("not.exist");
  });

  Cypress.Commands.add("navigateToReseller", () => {
    cy.get('.navbar').contains('Reseller').click();
    cy.url().should('include', '/reseller-vendor');
    cy.get(".svg").should("not.exist");
  });

  Cypress.Commands.add("navigateToUser", () => {
    cy.get('.navbar').contains('User').click();
    cy.url().should('include', '/users');
    cy.get(".svg").should("not.exist");
  });

  Cypress.Commands.add("navigateToAM", () => {
    cy.get('.navbar').contains('Account Manager').click();
    cy.url().should('include', '/account-manager');
    cy.get(".svg").should("not.exist");
  });

  Cypress.Commands.add("navigateToMACommissions", () => {
    cy.get('.navbar').contains('Master Agent Commissions').click();
    cy.url().should('include', '/reseller-comission');
    cy.get(".svg").should("not.exist");
  });

  Cypress.Commands.add("navigateToCostPriceRules", () => {
    cy.get('.navbar').contains('Cost Price Rules').click();
    cy.url().should('include', '/cost-price-rule');
    cy.get(".svg").should("not.exist");
  });

  Cypress.Commands.add("navigateToAPIDashboard", () => {
    cy.get('.navbar').contains('API Dashboard').click();
    cy.url().should('include', '/api-dashboard');
    cy.get(".svg").should("not.exist");
  });

  Cypress.Commands.add("navigateToAlternateVendorUpdate", () => {
    cy.get('.navbar').contains('Alternate Vendor Update').click();
    cy.expect('url', '/alternate-vendor-update');
    cy.get(".svg").should("not.exist");
  });

//Settings dropdown
  Cypress.Commands.add("openSettingsDropdown", () => {
    cy.get('.navbar').contains('Settings').click();
    cy.get('.dropdown.ng-scope.open').should('be.visible');
  });

  Cypress.Commands.add("navigateToSystemFX", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('System FX Rate').click();
    cy.url().should('include', '/fx-rate');
  });

  Cypress.Commands.add("navigateToSKUMapper", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('SKU Mapper').click();
    cy.url().should('include', '/skumapper');
  });

  Cypress.Commands.add("navigateToStandardCost", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('Baas - Standard Cost').click();
    cy.url().should('include', '/skubasecost');
  });

  Cypress.Commands.add("navigateToWitholdingTax", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('Witholding Taxes Block').click();
    cy.url().should('include', '/witholdingtax');
  });

  Cypress.Commands.add("navigateToFXRelations", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('FX Relations').click();
    cy.url().should('include', '/fx-relation');
  });

  Cypress.Commands.add("navigateToSKUList", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('SKU whitelist/Blacklist').click();
    cy.url().should('include', '/skulist');
  });

  Cypress.Commands.add("navigateToCloseBilling", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('Close Billing Month').click();
    cy.url().should('include', '/close-billingmonth');
  });
  
  Cypress.Commands.add("navigateToIntercompany", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('Intercompany Invoice').click();
    cy.url().should('include', '/intercompany');
  });

  Cypress.Commands.add("navigateToManageFXRate", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('Manage Vendor FX Rate').click();
    cy.url().should('include', '/manage-fxrate');
  });

  Cypress.Commands.add("navigateToUpliftRules", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('Uplift Rules').click();
    cy.url().should('include', '/uplift-rules');
  });

  Cypress.Commands.add("navigateToVendorStandard", () => {
    cy.openSettingsDropdown();
    cy.get('.dropdown-menu').contains('Vendor Standard Configuration').click();
    cy.url().should('include', '/vendor-standard-config');
  });

//Logged user dropdown
Cypress.Commands.add('navigateToMyAccount', () => {
  cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
  cy.get('.navbar-right > .dropdown > .dropdown-menu').should('be.visible')
  cy.get('a[href="/#!/my-account"]').click();
  cy.get('h4.ng-binding').should('have.text','My account')
});

Cypress.Commands.add('logout', () => {
  cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
  cy.get('.navbar-right > .dropdown > .dropdown-menu').should('be.visible')
  cy.get('a[href="/#!/auth/logout"]').click();
});

//Simple loading
Cypress.Commands.add("waitLoading", () => {
  cy.get('.svg',{timeout:30000}).should('not.exist')
  });

  //**Invoice**
Cypress.Commands.add("typeInvoiceFilters", (typeFilters) => {
    for (var i = 0, len = typeFilters.length; i < len; i++) {
      cy.get(typeFilters[i].key).type(typeFilters[i].value);
    }
  });

Cypress.Commands.add("selectInvoiceFilters", (selectFilters) => {
    for (var i = 0, len = selectFilters.length; i < len; i++) {
      cy.get(selectFilters[i].key).select(selectFilters[i].value);
    }
  });  
  
  Cypress.Commands.add("clickFilter", () => {
    cy.get("#action-filter").click();
    cy.wait('@waitQuery', {timeout:30000});
  });

  Cypress.Commands.add("exportInvoice", () => {
    cy.get("#checkallfiltered > .md-container").should('not.be.hidden').click();
    cy.get("#action-exportexcel").click();
    cy.get('body > div.md-dialog-container.ng-scope > md-dialog > form > md-dialog-actions > button.button.button-default.ng-binding').click();
    cy.wait('@invoiceExportedFile', {timeout:30000})
    cy.readFile('cypress/downloads/CBSDataExport.xlsx', 'utf-8')
  }); 


  //**Subscription**
  Cypress.Commands.add("typeSubscriptionFilters", (typeFilters) => {
    for (var j = 0, len = typeFilters.length; j < len; j++) {
      cy.get(typeFilters[j].key).type(typeFilters[j].value);
    }
  });

Cypress.Commands.add("selectSubscriptionFilters", (selectFilters) => {
    for (var j = 0, len = selectFilters.length; j < len; j++) {
      cy.get(selectFilters[j].key).select(selectFilters[j].value);
    }
  });

  Cypress.Commands.add("exportAllSubscriptions", () => {
    cy.get('#exportallexcel').click()
    cy.get('body > div.md-dialog-container.ng-scope > md-dialog > form > md-dialog-actions > button.button.button-default.ng-binding').click();
    cy.wait('@subExportedFile', {timeout:30000})
    cy.readFile('cypress/downloads/CBSDataExport.xlsx', 'utf-8')
  }); 
  
