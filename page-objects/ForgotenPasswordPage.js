//const email 
export default class ForgottenPasswordPage{
    static emailEntering(email){
        cy.get("#user_email").type(email)
        }

    static clickOnSendPass(){
        cy.get('input.btn').click()
    }

    static getSuccessMessage(){
        cy.get("div.offset3").contains("Your password will be sent to the following email: ")
    }
}