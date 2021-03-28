import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import UserPageTransferFTab from "../../../../../page-objects/UserPageTransferFTab";
import BaseMethods from "../../../../../page-objects/BaseMethods";
import HomePage from "../../../../../page-objects/HomePage";

Given('I open Transfer Funds tab',()=>{
    BaseMethods.openHomepage()
    HomePage.signInClick()
    cy.loginCustom("username","password")
    UserPageTransferFTab.openTransferFundsTab()
})

When('I fill the form and click on Continue button',()=>{
    UserPageTransferFTab.fillingTransferMoneyForm('4','6',400,"description")
})

And('I verify information and click on submit button',()=>{
    BaseMethods.urlValidationEquals("http://zero.webappsecurity.com/bank/transfer-funds-verify.html")
    UserPageTransferFTab.verifyingTransferMoneyForm()
    UserPageTransferFTab.clikSubmitAfterVerification()
})

And('I verify information and click on cancel button',()=>{
    BaseMethods.urlValidationEquals("http://zero.webappsecurity.com/bank/transfer-funds-verify.html")
    UserPageTransferFTab.verifyingTransferMoneyForm()
    UserPageTransferFTab.clikCancelAfterVerification()
})
Then('I see success message for payment',()=>{
    BaseMethods.urlValidationContains("http://zero.webappsecurity.com/bank/transfer-funds-confirm.html")
    UserPageTransferFTab.successMsgValidation()
})

Then('I was moved to previous page',()=>{
    BaseMethods.urlValidationContains("http://zero.webappsecurity.com/bank/transfer-funds.html")
})