import BaseMethods from "../../../page-objects/BaseMethods"
import UserPagePaybillsTab from "../../../page-objects/UserPagePaybillsTab"
import HomePage from "../../../page-objects/HomePage"

describe('New payee creation scenario',()=>{

    before(function(){
        BaseMethods.openHomepage()
        HomePage.signInClick()

        // cy.fixture('user').then(user=>{
        //     const username = user.login
        //     const password = user.password

        //     cy.loginCustom(username,password)
        // })
        cy.loginCustom("username","password")

        BaseMethods.urlValidationContains('bank/account-summary.html')
    })

        

    it('filling new payee form',()=>{
        UserPagePaybillsTab.openingAddNewPayeeTab()
        BaseMethods.urlValidationContains('bank/pay-bills.html')
        //Should be modified not only for piska
        UserPagePaybillsTab.submissionAddNewPayeeForm("piska","siska","popka","v popku I pisku")
    })

    it('validation of payee creation',()=>{
        BaseMethods.urlValidationEquals('http://zero.webappsecurity.com/bank/pay-bills-new-payee.html')
        UserPagePaybillsTab.successMsgPayeeCreation()
    })
})