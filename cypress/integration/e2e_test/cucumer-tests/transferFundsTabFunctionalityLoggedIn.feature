Feature: TransferFunds tab functionality
As a user 
I want transfer funds tab to submit or cancel payment

Scenario: Making payment and further submission
Given I open Transfer Funds tab
When I fill the form and click on Continue button
And I verify information and click on submit button
Then I see success message for payment

Scenario: Making payment and further cancellation
Given I open Transfer Funds tab
When I fill the form and click on Continue button
And I verify information and click on cancel button
Then I was moved to previous page
