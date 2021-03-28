import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import BaseMethods from '../../../../../page-objects/BaseMethods'
import HomePage from '../../../../../page-objects/HomePage'
import FeedbackPage from '../../../../../page-objects/FeedbackPage'

// before(function(){
//      BaseMethods.openHomepage()
//      BaseMethods.urlValidationEquals("http://zero.webappsecurity.com/")
// })

Given ('I click on feedback page',()=>{
    BaseMethods.openHomepage()
    BaseMethods.urlValidationEquals("http://zero.webappsecurity.com/")
    HomePage.feedbackTabClick()
    BaseMethods.urlValidationContains("/feedback.html")
})

When('I fill the form with valid values',()=>{
    FeedbackPage.fillFeedbackForm("poska","siska","potka","popka")
})

When('Click on Send button',()=>{
    FeedbackPage.clickOnSend()
})

When('Click on Clear button',()=>{
    FeedbackPage.clickOnClear()
})

Then('I get success message and URL is valid',()=>{
  FeedbackPage.getSuccessMessage()
  BaseMethods.urlValidationContains("/sendFeedback.html")
})

Then("Fields becomes empty and I'm not able to send feedback",()=>{
    FeedbackPage.nameField().should('be.empty')
    BaseMethods.urlValidationContains("/feedback.html")
  })
