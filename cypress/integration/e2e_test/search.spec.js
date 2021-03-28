import HomePage from '../../../page-objects/HomePage'
import BaseMethods from '../../../page-objects/BaseMethods'
describe('Searchbox test',()=>{

    before(function(){
       BaseMethods.openHomepage()
    })
    it('performing search',()=>{
        HomePage.searchInSearchField('test')

    })
    it('validation of search results',()=>{
        BaseMethods.urlValidationContains('search.html?searchTerm')
        HomePage.searchResulMessageValidation('Search Results:')
       
    })
})