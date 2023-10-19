class loginpage {
    formHeader(){
        return cy.get('.form-signin-heading')
    }
    email(){
        return cy.get('#username')
    }
    password(){
        return cy.get('#password')
    }
     enter(){
        return cy.get('#login-bt')
    }
}
  
  export default loginpage