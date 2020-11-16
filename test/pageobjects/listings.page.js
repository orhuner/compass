const Page = require('./page');
fs = require('fs');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ListingsPage extends Page {
    // constructor() {};
    neigborhoods = [];
    listingURLs = [];
    get filtersLink () { return $$('[name="Filters"]') }
    get searchLink () { return $('[title="Search"]') }
    get locations () { return $('[name="Locations"]') }
    get manhattanOption () { return $('[data-uc-toggle-id="2"]') }
    get allManhattan () { return $('span=All Manhattan') }
    get descendingSymbol () { return $('[colid="listing.location.neighborhood"] [id="agSortDesc"] .cx-icon') }
    get ascendingSymbol () { return $('[colid="listing.price.lastKnown"] [id="agSortAsc"] use') }
    get neighborhoodsMenu () { return $('[class="uc-searchBarLocations-neighborhood"]') }
    get priceFilter () { return $('[data-tn="lolTableHeader-link-listing.price.lastKnown"]') }
    get listingElements () { return $$('.lolTable-cols-buildingName a') }
    get neighborhoodsElements () {return $$('div.ag-cell-no-focus[colid="listing.location.neighborhood"]') }
    get headerLocationFilter () { return $('span.uc-searchBarOmnibox-choiceText')}
    get listingsContainer () { return $('div.ag-body-container') }
    
    

    getMostExpensiveListings() {
        for (var i = 0; i < this.listingElements.length; i++) {
            var url = this.listingElements[i].getAttribute('href');
            this.listingURLs.push(url);
        }
    }

    getNeighborhoodsInOrder() {
        
        for (var i = 0; i < this.neighborhoodsElements.length; i++) {
            var url = this.neighborhoodsElements[i].getText();
            this.neigborhoods.push(url);
        }
    }

    displayMostExpensive() {
        let seen = [];
        let results = [];
        let i = 0;
        let limit = 0;
        console.log('The most 5 expensive listings in Manhattan are:  ');
        while (limit < 5){
            if (!seen.includes(this.neigborhoods[i])) {
                seen.push(this.neigborhoods[i]);
                console.log(this.listingURLs[i]);
                limit++;
            }
            i++;
        }
    }
}

module.exports = new ListingsPage();
