const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {

    get signInButton () { return $('button[data-tn="ucCorpNav-btn-logIn"]') }
    get buyerSellerButton () { return $$('button[class="cx-solidBtn cx-solidBtn--xl"]') }
    get continueWithEmailButton () { return $$('button[class="cx-enclosedBtn cx-enclosedBtn--xl uc-authentication-social-button"]')[1] }
    get emailInput () { return $('input[name="email"]') }
    get passwordInput () { return $('input[name="password"]') }
    get continueButton () { return $('button[id="continue"]') }
    get takeHomeLink () { return $('a[href="/app/home/"]') }

    login (username, password) {
        this.signInButton.click();
        browser.pause(1000);
        this.buyerSellerButton[1].waitForDisplayed({timeout: 1000});
        this.buyerSellerButton[1].click();
        this.continueWithEmailButton.waitForDisplayed();
        this.continueWithEmailButton.click();
        this.emailInput.waitForDisplayed();
        this.emailInput.setValue(username);
        this.continueButton.click();
        this.passwordInput.waitForDisplayed();
        this.passwordInput.setValue(password);
        this.continueButton.click();


    }
    open () {
        return super.open();
    }
}

module.exports = new LandingPage();
