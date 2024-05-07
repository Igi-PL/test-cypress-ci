/// <reference types="cypress" />

import { alerts } from "../../components/alerts"
import { getRandomUser } from "../../generators/userGenerator"
import { registerMocks } from "../../mocks/postSignUp"
import { registerPage } from "../../pages/registerPage"

describe('Register tests in isolation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/register')
    })

    it('should successfully register', () => {
        const user = getRandomUser()
        registerMocks.mockSuccess()

        registerPage.attenptRegister()

        alerts.verifySuccess('Registration successful')
        cy.get('.alert').should('contain.text', 'Registration successful')
        cy.url().should('contain', '/login')
    })

})