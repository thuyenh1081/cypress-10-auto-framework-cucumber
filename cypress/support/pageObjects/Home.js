class Home {
    visitHompage() {
        // cy.visit(Cypress.env("webdriveruni_homepage"));
        cy.visit(Cypress.env("home_page"), {timeout: 60000});
    }

    clickOn_ContactUs_Button() {
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }, {timeout: 8000})
    }
}
export default Home;