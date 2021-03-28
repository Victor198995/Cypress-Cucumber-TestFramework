//var nameFieldd = cy.get('input.btn-signin')

export default class FeedbackPage{
     
    static nameField(){return cy.get('input.btn-signin')}
    
    static fillFeedbackForm(name,email,subject,question){
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#subject').type(subject)
        cy.get('#comment').type(question)
    }

    static clickOnSend(){
        cy.get('input.btn-signin').click()
    }

    static clickOnClear(){
        cy.get('input[value="Clear"]').click()
    }

    static getSuccessMessage(){
        cy.get('div.offset3').contains("They will be reviewed by our Customer Service staff and given the full attention that they deserve.")
    }
}