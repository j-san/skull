/// <reference types="cypress" />

context('Test Cases page', () => {
  beforeEach(() => {
    cy.visit('/test-cases.html')
  })

  it('looks good with various desktop viewport size', () => {
    // https://on.cypress.io/viewport
    cy.viewport('macbook-15')
      .then(() => {
        cy.document().toMatchImageSnapshot();
      });
    cy.viewport('macbook-11')
      .then(() => {
        cy.document().toMatchImageSnapshot();
      });
  });

  it('looks good with various tablet viewport size', () => {
    cy.viewport('ipad-2')
      .then(() => {
        cy.document().toMatchImageSnapshot();
      });
    cy.viewport('ipad-2', 'portrait')
      .then(() => {
        cy.document().toMatchImageSnapshot();
      });
    cy.viewport('ipad-mini')
      .then(() => {
        cy.document().toMatchImageSnapshot();
      });
  });

  it('looks good with various mobile viewport size', () => {
    cy.viewport('iphone-x')
      .then(() => {
        cy.document().toMatchImageSnapshot();
      });
    cy.viewport('iphone-x', 'portrait')
      .then(() => {
        cy.document().toMatchImageSnapshot();
      });
    cy.viewport('iphone-4')
      .then(() => {
        cy.document().toMatchImageSnapshot();
      });
  });
})
