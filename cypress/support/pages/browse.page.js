/// <reference types="cypress"/>
export const browsePage = {
    productDetails: () => { return cy.get(':nth-child(5) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]')}
}