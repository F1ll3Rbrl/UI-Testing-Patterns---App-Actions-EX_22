/// <reference types="cypress"/>
export const paymentoptionPage = {
    completeCheckout: () => { return cy.get('[data-testid="completeCheckout"]')}
}