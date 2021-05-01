/// <reference types="cypress" />

context('Showcase page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('looks good with various desktop viewport size', () => {
    // https://on.cypress.io/viewport
    cy.viewport('macbook-15');
    cy.matchImageSnapshot('macbook-15');
    cy.viewport('macbook-11');
    cy.matchImageSnapshot('macbook-11');
  });

  it('looks good with various tablet viewport size', () => {
    cy.viewport('ipad-2');
    cy.matchImageSnapshot('ipad-2');
    cy.viewport('ipad-2', 'portrait');
    cy.matchImageSnapshot('ipad-2-portrait');
    cy.viewport('ipad-mini');
    cy.matchImageSnapshot('ipad-mini');
  });

  it('looks good with various mobile viewport size', () => {
    cy.viewport('iphone-x');
    cy.matchImageSnapshot('iphone-x');
    cy.viewport('iphone-x', 'portrait');
    cy.matchImageSnapshot('iphone-x-portrait');
    cy.viewport('iphone-4');
    cy.matchImageSnapshot('iphone-4');
  });
})
