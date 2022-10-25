class SearchResultInDetail {
    visitSearchResultInDetailPage() {
        cy.visit(Cypress.env("resultInDetail_page"));
    }

    getSearchtxt() {
        return cy.xpath("//input[@placeholder='Search city']");
    }

    inputSearchKey(searchKey) {
        this.getSearchtxt().click({ force: true }).type(searchKey);
    }

    getSearchBtn() {
        return cy.xpath("//button[@type='submit']")
    }

    clickSearchBtn() {
        this.getSearchBtn().click({ force: true })
    }

    getFirstResult() {
        return cy.get(".search-dropdown-menu > li > span:first-child")
    }

    clickOnTheFirstResult() {
        this.getFirstResult().click({ force: true });
    }
    getListResult() {
        return cy.get(".search-dropdown-menu > li");
    }
    getCurrentTime() {
        return cy.get(".current-container.mobile-padding > div > span");
    }
    getLocation() {
        return cy.get(".current-container.mobile-padding > div > h2");
    }
    getTemperature() {
        return cy.get(".current-container.mobile-padding > div > div > span");
    }
    getSummary() {
        return cy.get(".current-container.mobile-padding > div > div:nth-child(2)");
    }
    getNotFoundMessage() {
        return cy.get(".sub.not-found.notFoundOpen");
    }
    getNotificationWidget() {
        return cy.get(".widget-notification");
    } 
    
    makeASearch(searchKey) {
        this.inputSearchKey(searchKey)
        this.clickSearchBtn();
        this.clickOnTheFirstResult();

    }
}
export default SearchResultInDetail;