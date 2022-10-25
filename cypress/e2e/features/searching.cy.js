/// <reference types="cypress" />

beforeEach(()=>{
    cy.visit("https://openweathermap.org");
})
it('verify current url',()=>{
    expect(cy.url().should('include', 'openweathermap'))
})