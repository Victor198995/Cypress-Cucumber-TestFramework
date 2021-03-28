import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../../page-objects/HomePage";
import UserPagePaybillsTab from "../../../../../page-objects/UserPagePaybillsTab";
import BaseMethods from "../../../../../page-objects/BaseMethods";


// before(function(){
//      BaseMethods.openHomepage()
//      BaseMethods.urlValidationEquals("http://zero.webappsecurity.com/")
// })

Given('I open Add New Payee tab',()=>{
    BaseMethods.openHomepage()
    HomePage.signInClick()
    cy.loginCustom("username","password")
    UserPagePaybillsTab.openingAddNewPayeeTab()
})

Given('I open Pay Saved Payee tab',()=>{
    BaseMethods.openHomepage()
    HomePage.signInClick()
    cy.loginCustom("username","password")
    UserPagePaybillsTab.openingPaySavedPayeeTab()
})

Given('I open Purchase Foreign Currency tab',()=>{
    BaseMethods.openHomepage()
    HomePage.signInClick()
    cy.loginCustom("username","password")
    UserPagePaybillsTab.openingPurchaseCurrencyTab()
})


//When

When('I fill the form and click on Add button',()=>{
    UserPagePaybillsTab.submissionAddNewPayeeForm('name1','adress1','account1','details1')
})

When('I fill the form and click on Pay button',()=>{
    UserPagePaybillsTab.submissionPaymentToSaved('Bank of America','Checking',3000,'2020-01-10','note')

})

When('I fill the form and click on Purchase button',()=>{
    UserPagePaybillsTab.submissionPurchaseCurrencyForm('Mexico (peso)',2000)
})

//Then

Then('I should see success message for adding',()=>{
UserPagePaybillsTab.successMsgPayeeCreation()
})

Then('I should see success message for payment',()=>{
UserPagePaybillsTab.successPaymentMsg()
})

Then('I should see success message for purchasing',()=>{
UserPagePaybillsTab.successMsgCurrencyBought()
})