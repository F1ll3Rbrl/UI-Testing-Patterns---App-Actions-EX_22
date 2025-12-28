/// <reference types="cypress"/>

const { homePage } = require("../support/pages/home.page")
const loginPage = require("../support/pages/login.page")
const { email, senha } = require('../fixtures/data.json')
const { profilePage } = require("../support/pages/profile.page");
const { browsePage } = require("../support/pages/browse.page");
const { buyPage } = require("../support/pages/buy.page");
const { mycartPage } = require("../support/pages/mycart.page");
const { paymentoptionPage } = require("../support/pages/paymentoption.page");
const { ordersucessPage } = require("../support/pages/ordersuccess.page");

describe('Teste de Cadastro', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  });

  it('Deve fazer o login com sucesso', () => {
    homePage.openMenu('Account')
    loginPage.login( email, senha )
    homePage.openMenu('Account')
    profilePage.customerName().should('have.text', 'EBAC Cliente')
  });

    it('Deve fazer o checkout, após compra', () => {
    homePage.openMenu('Account')
    loginPage.login( email, senha )
    homePage.openMenu('Home')
    homePage.openMenu('Browse')
    browsePage.productDetails().click()
    buyPage.addToCart().click()
    mycartPage.selectAddressOrContinueToPayment().click()
    paymentoptionPage.completeCheckout().click()
    ordersucessPage.goBackHome().should('contain', 'Go Back Home')
    ordersucessPage.goBackHome().click()

  });

});