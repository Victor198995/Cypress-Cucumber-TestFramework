import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import BaseMethods from '../../../../../page-objects/BaseMethods'
import HomePage from '../../../../../page-objects/HomePage'
import OnlineBankingPage from '../../../../../page-objects/OnlineBankingPage'


Given('I open Online banking tab',()=>{
    BaseMethods.openHomepage()
    HomePage.onlineBankTabClick()
    
})

When('I click on Zero bank link',()=>{
    OnlineBankingPage.clickOnZeroBankElement()
})

When('I click on Home tab',()=>{
  OnlineBankingPage.clickOnHomeTab()

})

When('I click on sign in button',()=>{
    HomePage.signInClick()
    
})

When('I click on feedback tab',()=>{
    OnlineBankingPage.clickOnFeedbackTab()
})

Then('I redirected to homepage',()=>{
    BaseMethods.urlValidationEquals("http://zero.webappsecurity.com/index.html")
})

Then('I should see loginpage',()=>{
    BaseMethods.urlValidationContains("/login.html")
})

Then('I should see feedback page',()=>{
    BaseMethods.urlValidationContains("/feedback.html")

})

    