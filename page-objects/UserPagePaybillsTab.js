export default class UserPagePaybillsTab{
    //constructor(){ var namee = submissionAddNewPayeeForm.namee}

    
    static openingAddNewPayeeTab(){
        cy.get("#pay_bills_tab").click()
        cy.get('a').contains('Add New Payee').click()
    }

    static openingPurchaseCurrencyTab(){
        cy.get("#pay_bills_tab").click()
        cy.contains('Purchase Foreign Currency').click()
    }

    static openingPaySavedPayeeTab(){
        cy.get("#pay_bills_tab").click()
        cy.contains('Pay Saved Payee').click()
    }

    static submissionAddNewPayeeForm(name,adress,account,details){
        //this.namee = namee
        cy.get("#np_new_payee_name").type(name)
        cy.get("#np_new_payee_address").type(adress)
        cy.get("#np_new_payee_account").type(account)
        cy.get("#np_new_payee_details").type(details)
        cy.get("#add_new_payee").click()
    }
        
//should be customized
    static submissionPurchaseCurrencyForm(pc_currency,pc_amount){
        cy.get("#pc_currency").select(pc_currency)
        cy.get("#pc_amount").type(pc_amount)
        cy.get("#pc_inDollars_true").click()
        cy.get("#pc_calculate_costs").click()
        cy.get("#pc_conversion_amount").contains('= '+pc_amount)
        cy.get("#purchase_cash").click()
    }
//refactor later
    static submissionPaymentToSaved(payee,account,amount,date,description){
        cy.get("#sp_payee").select(payee)
        cy.get("#sp_account").select(account)
        cy.get("#sp_amount").type(amount)
        cy.get("#sp_date").type(date +' {enter}')
        cy.get("#sp_description").type(description)
        cy.get("#pay_saved_payees").click()
    }

    
    static successMsgPayeeCreation(){
        cy.get("#alert_content").contains('The new payee ').contains(' was successfully created.')
    }

    static successPaymentMsg(){
        cy.get("#alert_content>span").contains('The payment was successfully submitted.')
    }

    static successMsgCurrencyBought(){
        cy.get("#alert_content").contains('Foreign currency cash was successfully purchased.')
    }

    
}