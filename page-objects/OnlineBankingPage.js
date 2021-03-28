export default class OnlineBankingPage{

    static clickOnHomeTab(){
        cy.get('strong').contains('Home').click()
    }

    static clickOnFeedbackTab(){
        cy.get('strong').contains('Feedback').click()
    }

    static clickOnZeroBankElement(){
        cy.get('a').contains('Zero Bank').click()
        
    }

    static searchInSearchField(text){
        cy.get("#searchTerm").type(text+'{enter}')        
    }

}