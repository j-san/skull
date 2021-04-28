/// <reference types="cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('looks good with various viewport size', () => {
    // https://on.cypress.io/viewport
    cy.viewport('macbook-15')
      .then(() => {
        cy.document().toMatchImageSnapshot({name: 'macbook-15'});
      });
    cy.viewport('macbook-11')
      .then(() => {
        cy.document().toMatchImageSnapshot({name: 'macbook-11'});
      });
    cy.viewport('ipad-2')
      .then(() => {
        cy.document().toMatchImageSnapshot({name: 'ipad-2'});
      });
    cy.viewport('ipad-2', 'portrait')
      .then(() => {
        cy.document().toMatchImageSnapshot({name: 'ipad-2-portrait'});
      });
    cy.viewport('ipad-mini')
      .then(() => {
        cy.document().toMatchImageSnapshot({name: 'ipad-mini'});
      });
    cy.viewport('iphone-x')
      .then(() => {
        cy.document().toMatchImageSnapshot({name: 'iphone-x'});
      });
    cy.viewport('iphone-x', 'portrait')
      .then(() => {
        cy.document().toMatchImageSnapshot({name: 'iphone-x-portrait'});
      });
    cy.viewport('iphone-4')
      .then(() => {
        cy.document().toMatchImageSnapshot({name: 'iphone-4'});
      });
  })
})
