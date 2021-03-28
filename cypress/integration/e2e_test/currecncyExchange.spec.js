import BaseMethods from "../../../page-objects/BaseMethods"
import HomePage from "../../../page-objects/HomePage"
import UserPagePaybillsTab from "../../../page-objects/UserPagePaybillsTab"

describe('Currency exchange scenario',()=>{

    before(function(){
        BaseMethods.openHomepage()
        HomePage.signInClick()

        cy.fixture('user').then(user=>{
            const username = user.login
            const password = user.password
            cy.loginCustom(username,password)
        })
        //cy.url().should('include','bank/account-summary.html')
        BaseMethods.urlValidationContains('bank/account-summary.html')
    })

   
    it('currency exchange opening',()=>{
        UserPagePaybillsTab.openingPurchaseCurrencyTab()
        //cy.url().should('include','/bank/pay-bills.html')
        BaseMethods.urlValidationContains('/bank/pay-bills.html')
        

        //form filling
      UserPagePaybillsTab.submissionPurchaseCurrencyForm("MXN",2000)
    })

    
    it('currency exchange validation',()=>{
       UserPagePaybillsTab.successMsgCurrencyBought()

    })
})