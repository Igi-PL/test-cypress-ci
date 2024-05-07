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
Cypress.Commands.add('login', (username, password) => {
      // 1. Request http na logowanie
      cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signin',
        body: {
          username: username,
          password: password,
        },
    }).then((resp) => {
      // 2a. ustawienie sesję http w local storage
      localStorage.setItem('user', JSON.stringify(resp.body))
      // 2b. ustawienie sesji http w cookie
      cy.setCookie('token', resp.body.token)
    })
    cy.visit('http://localhost:8081')
})

Cypress.Commands.add('register', (user) => {
    // 1. Request http na logowanie
    cy.request({
      method: 'POST',
      url: 'http://localhost:4001/users/signup',
      body: user
  })
})

Cypress.Commands.add('delete', (username, token) => {
    // 1. Request http na logowanie
    cy.request({
      method: 'DELETE',
      url: `http://localhost:4001/users/${username}`,
      headers:{
        Authorization: `Bearer ${token}`
      }
  })
})

//Tego się nie stosuje
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