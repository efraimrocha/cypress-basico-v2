Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Efraim')
    cy.get('#lastName').type('Rocha')
    cy.get('#email').type('efra@gmail.com')
    cy.get('#open-text-area').type('TESTE')
    cy.contains('button', 'Enviar').click()
})