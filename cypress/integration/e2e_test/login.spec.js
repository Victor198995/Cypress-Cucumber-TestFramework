import BaseMethods from "../../../page-objects/BaseMethods"
import HomePage from "../../../page-objects/HomePage"
import LoginPage from "../../../page-objects/LoginPage"

describe('Login with invalid credentials',()=>{

    it('Homepage load validation',()=>{
        BaseMethods.openHomepage()
        BaseMethods.urlValidationEquals('http://zero.webappsecurity.com/')
    })

    it('login page loading',()=>{
        HomePage.signInClick()
        BaseMethods.urlValidationContains('/login.html')
        //later
        cy.get('h3').contains("Log in to ZeroBank")
    })

    it('login with invalid credentials',()=>{
        cy.loginCustom("popka","pisichka")

    })

    it('errormsg validation',()=>{
        LoginPage.getErrorMessage()
        
    })
    
})

describe('Login with valid credentials',()=>{
    
    it('login with valid credentials',()=>{
            cy.loginCustom("username","password")
        })
     
    it('logging in validation',()=>{
        BaseMethods.urlValidationContains('bank/account-summary.html')
        //later
        cy.get('ul.nav-tabs').should('be.visible')
    })

    it('logout',()=>{
        //later
        cy.get("i.icon-user").click()
        cy.get("#logout_link").click()
        BaseMethods.urlValidationContains('/index.html')
    })
})
