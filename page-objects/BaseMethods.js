export default class BaseMethods{

    static openHomepage(){
        cy.visit("http://zero.webappsecurity.com/")
    }

    static urlValidationContains(url){
        cy.url().should('include',url)
    }

    static urlValidationEquals(url){
        cy.url().should('equals',url)
        
    }
} 