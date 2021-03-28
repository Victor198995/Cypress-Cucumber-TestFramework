import BaseMethods from "../../../page-objects/BaseMethods"
import UserPageAccountActivityTab from "../../../page-objects/UserPageAccountActivityTab"
import HomePage from "../../../page-objects/HomePage"

describe('Transaction-filtering scenario',()=>{

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
   
    it('account activity tab opening',()=>{
       UserPageAccountActivityTab.openFindTransactTab()
        BaseMethods.urlValidationContains('bank/account-activity.html')
 UserPageAccountActivityTab.filterTransactions()
    })
})