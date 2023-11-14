/// <reference types="Cypress" />

describe('Central de atendimento ao CLiente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('Verifica o títuloda da aplicação', function() {
         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos pbrigtórios e envia o formulário', function() {
        cy.get('#firstName').type('Efraim')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('efra@gmail.com')
        cy.get('#open-text-area').type('Texto teste Ok')
        cy.get('button[type="submit"]').click()
        
        cy.get('.success').should('be.visible')
    })
})
