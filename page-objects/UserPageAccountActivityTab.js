export default class UserPageAccountActivityTab{
   
    static openFindTransactTab(){
         cy.get("#account_activity_tab").click()
        cy.get('.board-header').contains('Show Transactions')
         //cy.contains('Find Transactions').click()
    }
//refact later
    static filterTransactions(option){

 cy.get('#aa_accountId').select(option)
      
    }

    static getProperResult(){
        cy.get('.table-condensed').should('be.visible')
       
    }
}