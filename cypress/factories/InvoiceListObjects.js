class InvoiceListObjects {
    filterButton(){
        return cy.get(':nth-child(5) > .col-md-12 > .button-default').click()
    }
    clearFilters(){
        return cy.get(':nth-child(5) > .col-md-12 > .button-danger').clikck()
    }
    deleteBilling(){
        return cy.get(':nth-child(2) > .row > #invoice-actions > [ng-click="openDeleteBillingModal($event, load)"]').click()
    }
     ignoreInvoice(){
        return cy.get(':nth-child(2) > .row > #invoice-actions > #action-ignore').click()
    }
    reactivateInvoice(){
        return cy.get(':nth-child(2) > .row > #invoice-actions > #action-reativate').click()
    }
    exportInvoice(){
        return cy.get(':nth-child(2) > .row > #invoice-actions > #action-exportexcel').click()
    }
    createOrder(){
        return cy.get(':nth-child(2) > .row > #invoice-actions > #action-createorder').click()
    }
    createInvoice(){
        return cy.get(':nth-child(2) > .row > #invoice-actions > #action-createinvoice').click()
    }
    statusReady(){
        return cy.get('#status-filter > ul > li:nth-child(2) > md-checkbox > div.md-container').click()
    }
    resellerfilter(){
        return cy.get('#reseller').type(reseller)
    }

    
          
}
  
  export default InvoiceListObjects;