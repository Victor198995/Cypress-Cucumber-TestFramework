import BaseMethods from "../../../page-objects/BaseMethods"
import HomePage from "../../../page-objects/HomePage"
import FeedbackPage from "../../../page-objects/FeedbackPage"
describe('Feedback-submission test',()=>{

    it('homepage loading',()=>{
        BaseMethods.openHomepage()
        BaseMethods.urlValidationEquals('http://zero.webappsecurity.com/')
    })

    it('feedback page loading',()=>{
        HomePage.feedbackTabClick()
        BaseMethods.urlValidationContains('/feedback.html')
    })

    it('filling in feedback form',()=>{

        FeedbackPage.fillFeedbackForm("name","email@","subject","comment")
        FeedbackPage.clickOnSend()
        
    })

    it('submission feedback form and validation content',()=>{
        BaseMethods.urlValidationContains('/sendFeedback.html')
        FeedbackPage.getSuccessMessage()
    })
})

describe('Feedback-cancellation test',()=>{

    it('homepage loading',()=>{
        BaseMethods.openHomepage()
        BaseMethods.urlValidationEquals('http://zero.webappsecurity.com/')
    })

    it('feedback page loading',()=>{
        HomePage.feedbackTabClick()
        BaseMethods.urlValidationContains('/feedback.html')
    })

    it('filling in feedback form',()=>{

        FeedbackPage.fillFeedbackForm("name","email@","subject","comment")
        FeedbackPage.clickOnClear()
        
    })

    it('submission feedback form and validation content',()=>{
        BaseMethods.urlValidationEquals('http://zero.webappsecurity.com/feedback.html')
    })
})