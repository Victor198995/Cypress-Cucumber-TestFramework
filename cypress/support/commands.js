Cypress.Commands.add('loginCustom',(username,password)=>{
    cy.get("#user_login").type(username)
    cy.get("#user_password").type(password)
    cy.get("#user_remember_me").click()
    cy.get("input.btn-primary").click()
})