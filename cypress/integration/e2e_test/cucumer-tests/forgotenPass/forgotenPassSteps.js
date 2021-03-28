import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import BaseMethods from "../../../../../page-objects/BaseMethods"
import HomePage from "../../../../../page-objects/HomePage"
import LoginPage from "../../../../../page-objects/LoginPage"
import ForgottenPasswordPage from "../../../../../page-objects/ForgotenPasswordPage"

  before(function(){
      BaseMethods.openHomepage()
      HomePage.signInClick()
      BaseMethods.urlValidationContains("/login.html")
    
})

Given('I click on forgotten password link',()=>{
   LoginPage.clickOnForgotPasswordLink()
})

When('I fill the form with {string}',email=>{
   ForgottenPasswordPage.emailEntering(email)
})

When('Click on Send button',()=>{
    ForgottenPasswordPage.clickOnSendPass()
    
})

Then('I get success message and URL is valid',()=>{
    ForgottenPasswordPage.getSuccessMessage()
    })
