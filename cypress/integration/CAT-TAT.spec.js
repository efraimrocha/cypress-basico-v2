/// <reference types="Cypress" />

describe('Central de atendimento ao CLiente TAT', function() {


    beforeEach(function(){
        cy.visit('./src/index.html')
    })


    it('Verifica o títuloda da aplicação', function() {
         cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })


    it('preenche os campos pbrigtórios e envia o formulário', function() {
        const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indn unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis release of Letraset sheets containing Lorem Ipsum passages, and more recently with d.'

        cy.get('#firstName').type('Efraim')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('efra@gmail.com')
        cy.get('#open-text-area').type(longText, { delay:0 })
        cy.contains('button', 'Enviar').click()
        
        cy.get('.success').should('be.visible')
    })


    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Efraim')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('efra@gmail,com')
        cy.get('#open-text-area').type('Teste text area')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('campo telefone continua vazio quando preenchido com valor numérico', function(){
        cy.get('#phone')
        .type('abcdefghijklmnopqrstuvxz')
        .should('have.value', '')
    })
    ///Ex esxtra 4:

    it('preenche os campos pbrigtórios e envia o formulário', function() {

        cy.get('#firstName').type('Efraim')
        cy.get('#lastName').type('Rocha')
        cy.get('#email').type('efra@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('TESTE')
        cy.contains('button', 'Enviar').click()
        
        cy.get('.error').should('be.visible')
    })

    /// Ex extra 5 - clear

    it('preence e limpa os campos nome, e sobrenome, email e telefone', function(){
        cy.get('#firstName')
        .type('Efraim')
        .should('have.value', 'Efraim')
        .clear()
        .should('have.value','')
        cy.get('#lastName')
        .type('Rocha')
        .should('have.value', 'Rocha')
        .clear()
        .should('have.value', '')
        cy.get('#email')
        .type('efra@gmail.com')
        .should('have.value', 'efra@gmail.com')
        .clear()
        .should('have.value', '')
        cy.get('#phone')
        .type('1234567890')
        .should('have.value', '1234567890')
        .clear()
        .should('have.value', '')
    })

    /// Ex extra 6 - 
   
    it('exibe mensagem de erro ao submeter o formulá sem preencher os campos obrigatórios', function(){
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })


    // Ex 7 - Comandos customizados
    it('envia o formulário com sucesso suadno um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })
    
    //-------------------------------------------------------------------------
    // Seção 4: Selecioando opções em campos de seleção suspensa.

    // Ex1:
    it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('#product')
        .select('YouTube')
        .should('have.value','youtube')
    })

    // Ex2:

    it('seleciona um produto (Mentoria por seu vlaor (value)', function(){
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
    })

    it.only('seleciona um produto (Blog) por seu íncice', function(){
    cy.get('#product')
    .select(1)
    .should('have.value','blog')
    })


})