import {Given,When, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../../../page-objects/HomePage"
import BaseMethods from "../../../../../page-objects/BaseMethods"

Given('I open Homepage',()=>{
   BaseMethods.openHomepage()
})

Given('I open Online banking tab',()=>{
    HomePage.onlineBankTabClick()
})


When('I perform search',()=>{
    HomePage.searchInSearchField('Test query')
})

Then('I analyze the results',()=>{
    BaseMethods.urlValidationContains('search.html?searchTerm')
    HomePage.searchResulMessageValidation('Search Results:')
})