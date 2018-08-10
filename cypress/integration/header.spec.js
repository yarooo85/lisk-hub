import accounts from '../../test/constants/accounts';

describe('Header', () => {
  it.only('Balance is correct', () => {
    cy.request('GET', `${Cypress.env('CORE_URL')}/api/accounts?address=${accounts.genesis.address}`);
    cy.visit('/dashboard');
    cy.get('.copy-title').should('contain', accounts.genesis.address);
    cy.get('.balance span').should('contain', accounts.genesis.balance);
  });
};
