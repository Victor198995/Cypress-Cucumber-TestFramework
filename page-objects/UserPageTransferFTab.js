export default class UserPageTransferFTab{
    static openTransferFundsTab(){

        cy.get("#transfer_funds_tab").click()
        cy.get('h2.board-header').contains('Transfer Money & Make Payments')
    }

    static fillingTransferMoneyForm(from_acc,to_acc,amount,description){
        cy.get('#tf_fromAccountId').select(from_acc)
        cy.get('#tf_toAccountId').select(to_acc)
        cy.get('#tf_amount').type(amount)
        cy.get('#tf_description').type(description)
        cy.get('#btn_submit').click()

    }

    static verifyingTransferMoneyForm(){
        //http://zero.webappsecurity.com/bank/transfer-funds-verify.html
        cy.get('p').contains('Please verify that the following transaction is correct by selecting')
    }

    static clikSubmitAfterVerification(){ 
        cy.get('#btn_submit').click()
    }

    static clikCancelAfterVerification(){
        cy.get('#btn_cancel').click()
    }

    static successMsgValidation(){
       // http://zero.webappsecurity.com/bank/transfer-funds-confirm.html
       cy.get('div.alert').contains('You successfully submitted your transaction.')
    }

}