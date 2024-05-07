/// <reference types="cypress" />

describe('Home page tests', () => {
    beforeEach(() => {
      // Pozbyć się przejścia przez FE
      // cy.visit('http://localhost:8081')
      // cy.get('[name=username]').type('admin')
      // cy.get('[name=password]').type('admin')
      // cy.get('.btn-primary').click()
    cy.login('admin', 'admin')
  })
  
  it.only('displays at least one user', () => {
    cy.get('ul li').should('have.length.at.least', 1)
  })

  it('should logout', () => {
    cy.get('#logout').click()
    cy.get('h2').should('have.text', 'Login')
    cy.url().should('contain', '/login')
  })

  it('should open add more user page', () => {
    cy.get('#addmore').click()
    cy.get('h2').should('have.text', 'Register')
    cy.url().should('contain', 'add-user')
  })

})
  