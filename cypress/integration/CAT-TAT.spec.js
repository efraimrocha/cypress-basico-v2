/// <reference types="Cypress" />

describe('Central de atendimento ao CLiente TAT', function() {


    beforeEach(function(){
        cy.visit('./src/index.html')
    })


    it('Verifica o títuloda da aplicação', function() {
         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })


    it('preenche os campos pbrigtórios e envia o formulário', function() {
        const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indn unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

        cy.get('#firstName').type('Efraim')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('efra@gmail.com')
        cy.get('#open-text-area').type(longText, { delay:0 })
        cy.get('button[type="submit"]').click()
        
        cy.get('.success').should('be.visible')
    })


    it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Efraim')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('efra@gmail,com')
        cy.get('#open-text-area').type('Teste text area')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it('campo telefone quando preenchido com valor não numérico', function(){
        cy.get('#phone')
        .type('abcdefghijklmnopqrstuvxz')
    })
})
