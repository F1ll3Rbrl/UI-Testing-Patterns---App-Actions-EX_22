/// <reference types="cypress"/>
export const mycartPage = {
    selectAddressOrContinueToPayment: () => { return cy.get('[data-testid="selectAddressOrContinueToPayment"]')}
}