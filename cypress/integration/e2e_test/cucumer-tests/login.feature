Feature: Login to App

As a user 
I want to log in into App

Scenario: Invalid login
Given I open loginpage
When I enter invalid credentials and hit submit button
Then I should see errormessage

Scenario: Valid login
Given I open loginpage
When I enter valid credentials and hit submit button
Then I should see user homepage