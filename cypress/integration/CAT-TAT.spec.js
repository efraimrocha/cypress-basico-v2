/// <reference types="Cypress" />

describe('Central de atendimento ao CLiente TAT', function() {
    it('Verifica o títuloda da aplicação', function() {
        cy.visit('./src/index.html')

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
})
