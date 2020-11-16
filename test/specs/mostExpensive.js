const LandingPage = require('../pageobjects/landing.page');
const ListingsPage = require('../pageobjects/listings.page');

describe('Compass website ', () => {
    it('should login with valid credentials', () => {
        browser.maximizeWindow();
        LandingPage.open();

        LandingPage.login('compass9012@gmail.com', 'Takehome1234567890');
        // validate we logged in by verifying an element on listings page
        expect(LandingPage.takeHomeLink).toBeExisting();
    });

    it('should allow user to filter by borough and neighborhood', () => {
        LandingPage.takeHomeLink.click();
        ListingsPage.searchLink.waitForDisplayed();
        ListingsPage.searchLink.click();
        ListingsPage.locations.waitForDisplayed();
        ListingsPage.locations.click();
        ListingsPage.manhattanOption.waitForDisplayed();
        ListingsPage.manhattanOption.click();
        ListingsPage.allManhattan.waitForDisplayed();
        ListingsPage.allManhattan.waitForEnabled({timeout:1000});
        ListingsPage.allManhattan.click();
        
        browser.waitUntil(
            () => ListingsPage.headerLocationFilter.getText() === 'Manhattan',
            {
                timeout: 5000,
                timeoutMsg: 'expected location to be Manhattan after 5s'
            }
        );
        
        ListingsPage.locations.click();
        ListingsPage.neighborhoodsMenu.waitForDisplayed({ reverse: true , timeout: 1000}); 
        
    });

    it('should display the 5 most expensive listings from different neighborhoods', () => {
        // click until descending arrow is displayed
        ListingsPage.priceFilter.click(); 
        browser.pause(500)
        ListingsPage.priceFilter.click(); 
        ListingsPage.ascendingSymbol.waitForExist();
        browser.pause(1000);
        ListingsPage.listingsContainer.waitForDisplayed();
        ListingsPage.getMostExpensiveListings();
        ListingsPage.getNeighborhoodsInOrder(); 
        ListingsPage.displayMostExpensive();
    });

});


