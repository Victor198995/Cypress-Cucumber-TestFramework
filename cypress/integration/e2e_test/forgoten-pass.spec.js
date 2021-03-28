import BaseMethods from "../../../page-objects/BaseMethods"
import LoginPage from "../../../page-objects/LoginPage"
import HomePage from "../../../page-objects/HomePage"
import ForgottenPasswordPage from "../../../page-objects/ForgotenPasswordPage"

describe('Forgotten password test scenario',()=>{

    it('open homepage and validation url',()=>{
        BaseMethods.openHomepage()
        BaseMethods.urlValidationEquals('http://zero.webappsecurity.com/')
    })
    it('opening sign in page and validation url',()=>{
        HomePage.signInClick()
        BaseMethods.urlValidationContains('login.html')

        
    })
    it('Clicking on forgot password and validate behavior',()=>{
        LoginPage.clickOnForgotPasswordLink()
        BaseMethods.urlValidationContains('forgot-password.html')
    })
    it('Sending pass to email',()=>{
        ForgottenPasswordPage.emailEntering("piska1")
        ForgottenPasswordPage.clickOnSendPass()
        ForgottenPasswordPage.getSuccessMessage()
    })
   // Your password will be sent to the following email:
//    it('Success message  validation',()=>{

//    }
})