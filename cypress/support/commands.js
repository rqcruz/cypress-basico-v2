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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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

// Exercicio extra 7
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (nome, sobrenome, email, mensagemComoAjudar) => { 
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(mensagemComoAjudar)
    //cy.get('button[type="submit"]').click() //Exercicio 8 substituindo cy.get pelo cy.contains
    cy.contains('button', 'Enviar').click()
 })

