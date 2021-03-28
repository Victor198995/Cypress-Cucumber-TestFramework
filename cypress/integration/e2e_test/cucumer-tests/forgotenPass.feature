Feature: Password recovery

As a user 
I want to restore my password

Scenario: Sending forgotten password

Given I click on forgotten password link
When I fill the form with "piska"
And Click on Send button
Then I get success message and URL is valid


