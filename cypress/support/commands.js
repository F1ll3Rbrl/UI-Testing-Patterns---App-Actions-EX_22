// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { browsePage } from "./pages/browse.page"
import { buyPage } from "./pages/buy.page"
import { homePage } from "./pages/home.page"
import loginPage from "./pages/login.page"
import { mycartPage } from "./pages/mycart.page"
import { paymentoptionPage } from "./pages/paymentoption.page"

Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
    homePage.openMenu('Account')
    loginPage.login( email, senha )
    homePage.openMenu('Home')
    homePage.openMenu('Browse')
    browsePage.productDetails().click()
    buyPage.addToCart().click()
    mycartPage.selectAddressOrContinueToPayment().click()
    paymentoptionPage.completeCheckout().click()
})
