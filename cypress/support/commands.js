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




Cypress.Commands.add('openSaoPabloPage', ()=>{
    let saoPablo = Cypress.env('saoPablo')
    Cypress.config('baseUrl', saoPablo)
    cy.visit('/')
})
Cypress.Commands.add('openLyonPage', ()=>{
    let lyon = Cypress.env('lyon')
    Cypress.config('baseUrl', lyon)
    cy.visit('/')
})
Cypress.Commands.add('openBMCPage', ()=>{
    let BMC = Cypress.env('BMC')
    Cypress.config('baseUrl', BMC)
    cy.visit('/')
})