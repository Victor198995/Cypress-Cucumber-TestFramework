
export default class LoginPage{

    static clickOnForgotPasswordLink(){
        cy.get('a').contains('Forgot your password ?').click()
    }

    static getErrorMessage(){
        cy.get("div.alert").contains("Login and/or password are wrong")
    }
    
}