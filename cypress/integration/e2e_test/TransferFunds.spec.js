import BaseMethods from "../../../page-objects/BaseMethods"
import HomePage from "../../../page-objects/HomePage"

describe('Transfer funds scenario',()=>{

    before(function(){
        BaseMethods.openHomepage()
        HomePage.signInClick()

        cy.fixture('user').then(user=>{
            const username = user.login
            const password = user.password
            cy.loginCustom(username,password)
        })
        BaseMethods.urlValidationContains('bank/account-summary.html')
    })

   
    it('Transfer funds form opening and filling',()=>{
        cy.get("#transfer_funds_tab").click()
        BaseMethods.urlValidationContains('bank/transfer-funds.html')
        //form filling
        cy.get("#tf_fromAccountId").select("2")
        cy.get("#tf_toAccountId").select("5")
        cy.get("#tf_amount").type("1000")
        cy.get('#tf_description').type("descripiska")
        cy.get("#btn_submit").click()

        BaseMethods.urlValidationContains('transfer-funds-verify.html')

        cy.get("#tf_fromAccountId").should('have.value','Checking')
        cy.get("#tf_toAccountId").should('have.value','Credit Card')
        cy.get("#tf_amount").should('have.value','1000')
        cy.get("#tf_description").should('have.value','descripiska')
        cy.get("#btn_submit").click()
        
    })

    
    it('transfer funds successMsg validation',()=>{
        
        cy.get(".alert-success").contains("You successfully submitted your transaction.")
        BaseMethods.urlValidationEquals('http://zero.webappsecurity.com/bank/transfer-funds-confirm.html')
        

    })
})