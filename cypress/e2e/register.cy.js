/// <reference types="cypress" />


import { getRandomUser } from "../generators/userGenerator"

let token;
let user;

describe('Registration tests', () => {
   beforeEach(() => {
       user = getRandomUser()
       cy.register(user)
       cy.login(user.username, user.password)
       cy.getCookie('token').then((cookie) => {
         token = cookie.value
       })
   })

   afterEach(() => {
     cy.delete(user.username, token)
   })

   it('display at least one user', () => {
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


