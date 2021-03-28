Feature: Feedback submission

As a user 
I want to send a feedback

Scenario: Sending feedback

Given I click on feedback page
When I fill the form with valid values
And Click on Send button
Then I get success message and URL is valid

Scenario: Clear button clear fields

Given I click on feedback page
When I fill the form with valid values
And Click on Clear button
Then Fields becomes empty and I'm not able to send feedback