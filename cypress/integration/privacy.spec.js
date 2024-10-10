// Exercicios extra 2 contidos em /lessons/07.md
it('testa a página da política de privacidade de forma independente', function() {
    cy.visit('./src/privacy.html')

    cy.contains('Talking About Testing').should('be.visible')
})