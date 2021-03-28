Feature: Search field validation
As a user 
I want to perform search trough searchfield

Scenario: Performing search from HomePage
Given I open Homepage
When I perform search
Then I analyze the results

Scenario: Performing search from Online banking page
Given I open Online banking tab
When I perform search
Then I analyze the results