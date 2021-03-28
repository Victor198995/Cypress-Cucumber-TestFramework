const searchFieldLocator = "#searchTerm"

export default class HomePage{

    static searchInSearchField(text){
        cy.get("#searchTerm").type(text+'{enter}')        
    }

    static signInClick(){
        cy.get("#signin_button").click()        
    }

    static searchResulMessageValidation(text){
        cy.get('h2').contains(text)
    }

    static homeTabClick(){
        cy.get('strong').contains('Home').click()
    }

    static onlineBankTabClick(){
        cy.get('strong').contains('Online Banking').click()
    }

    static feedbackTabClick(){
        cy.get('strong').contains('Feedback').click()
    }
}