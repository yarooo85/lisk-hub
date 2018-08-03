describe('My first test', () => {
  it('Visits the kitchen sink', () => {
    cy.visit('http://localhost:8080');
    cy.contains('.passphrase input')
      .click()
      .type('huy')
      .should('have.value', 'fake@email.com')
  })
})
