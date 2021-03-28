import BaseMethods from "../../../page-objects/BaseMethods"
import HomePage from "../../../page-objects/HomePage"

describe('Navbar testing',()=>{

    it('open homepage and validation url',()=>{
        BaseMethods.openHomepage()
        BaseMethods.urlValidationEquals('http://zero.webappsecurity.com/')
    })

    it('online banking',()=>{
        HomePage.onlineBankClick()
        BaseMethods.urlValidationContains('/online-banking.html')
        BaseMethods.openHomepage()
    })

    it('feedback from ob page',()=>{
       HomePage.feedbackTabClick()
        BaseMethods.urlValidationContains('/feedback.html')
        BaseMethods.openHomepage()
        
    })

    it('homepage content',()=>{
        HomePage.homeTabClick()
        BaseMethods.urlValidationContains('/index.html')
        
    })

})