Feature: Site Navigation
As a user 
I want to go to trough pages be navbar

Scenario: Go to Online banking and get back clicking on 'Zero Bank'
Given I open Online banking tab
When I click on Zero bank link
Then I redirected to homepage

Scenario: Go to Online banking and get back clicking on 'Home' tab
Given I open Online banking tab
When I click on Home tab
Then I redirected to homepage

Scenario: From Online banking to login
Given I open Online banking tab
When I click on sign in button
Then I should see loginpage

Scenario: From Online banking to Feedback
Given I open Online banking tab
When I click on feedback tab
Then I should see feedback page