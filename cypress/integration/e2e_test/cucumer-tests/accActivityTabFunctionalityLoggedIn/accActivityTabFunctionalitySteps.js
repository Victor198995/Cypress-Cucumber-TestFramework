import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import BaseMethods from "../../../../../page-objects/BaseMethods";
import HomePage from "../../../../../page-objects/HomePage";
import UserPageAccountActivityTab from "../../../../../page-objects/UserPageAccountActivityTab";

Given('I open Account activity tab',()=>{
BaseMethods.openHomepage()
HomePage.signInClick()
cy.loginCustom("username","password")
UserPageAccountActivityTab.openFindTransactTab()
})

When('I fill the form and click on Find button',()=>{
UserPageAccountActivityTab.filterTransactions('Checking')
})

Then('I see table with records',()=>{
UserPageAccountActivityTab.getProperResult()
})
