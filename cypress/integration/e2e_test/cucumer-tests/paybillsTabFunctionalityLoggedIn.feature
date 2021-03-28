Feature: PayBills tab functionality
As a user 
I want payBills tab to add new payee, make payment, purchase foreign currency

Scenario: Adding new Payee
Given I open Add New Payee tab
When I fill the form and click on Add button
Then I should see success message for adding

Scenario: Making payment
Given I open Pay Saved Payee tab
When I fill the form and click on Pay button
Then I should see success message for payment

Scenario: Purchasing foreign currency
Given I open Purchase Foreign Currency tab
When I fill the form and click on Purchase button
Then I should see success message for purchasing