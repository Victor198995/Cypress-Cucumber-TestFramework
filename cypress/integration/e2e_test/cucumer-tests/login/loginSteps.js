import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import BaseMethods from '../../../../../page-objects/BaseMethods'
import HomePage from '../../../../../page-objects/HomePage'
import LoginPage from '../../../../../page-objects/LoginPage'


Given('I open loginpage',()=>{
    BaseMethods.openHomepage()
    HomePage.signInClick()
    BaseMethods.urlValidationContains('/login.html')
    cy.get('h3').contains("Log in to ZeroBank")
})

When('I enter invalid credentials and hit submit button',()=>{
    cy.loginCustom("popka","pisichka")
})

When('I enter valid credentials and hit submit button',()=>{
    cy.loginCustom("username","password")
})

Then('I should see user homepage',()=>{
    BaseMethods.urlValidationContains('bank/account-summary.html')
    })

Then('I should see errormessage',()=>{
    LoginPage.getErrorMessage()
    })

    