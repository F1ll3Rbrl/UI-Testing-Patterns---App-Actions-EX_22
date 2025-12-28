/// <reference types="cypress"/>

const { email, senha } = require('../fixtures/data.json')
const { ordersucessPage } = require("../support/pages/ordersuccess.page");

describe('Teste de checkout', () => {

    it('Deve fazer o checkout, após compra', () => {
    cy.login(email, senha)
    ordersucessPage.goBackHome().should('contain', 'Go Back Home')
  });
});