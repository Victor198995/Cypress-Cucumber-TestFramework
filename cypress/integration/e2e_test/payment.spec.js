import BaseMethods from "../../../page-objects/BaseMethods"
import UserPagePaybillsTab from "../../../page-objects/UserPagePaybillsTab"

describe('Payment scenario',()=>{

    before(function(){
        BaseMethods.openHomepage()
        cy.get("#signin_button").click()

        cy.fixture('user').then(user=>{
            const username = user.login
            const password = user.password
            cy.loginCustom(username,password)
        })
        BaseMethods.urlValidationContains('bank/account-summary.html')
    })

   
    it('pay bills opening',()=>{
        UserPagePaybillsTab.openingPaySavedPayeeTab()
        BaseMethods.urlValidationContains('/bank/pay-bills.html')
        
        //form filling
     UserPagePaybillsTab.submissionPaymentToSaved()

    })

    it('payment validation',()=>{
        UserPagePaybillsTab.successPaymentMsg()

    })
})