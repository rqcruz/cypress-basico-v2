/// <reference types="Cypress" />

describe('Aula e exercicios contido em /lessons/02.md', function () {

    beforeEach(function () {
        cy.visit('./src/index.html')
    });

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    // Exercicio
    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Grilo')
        cy.get('#email').type('joao_grilo@tat.com')
        cy.get('#open-text-area').type('Realizando exercicio 1 do 02.md')
        //cy.get('button[type="submit"]').click() //Exercicio 8 substituindo cy.get pelo cy.contains
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    //Exercicio extra 1
    it('Exercicio extra 1 do 02.md', function () {
        const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste.'
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Grilo')
        cy.get('#email').type('joao_grilo@tat.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        //cy.get('button[type="submit"]').click() //Exercicio 8 substituindo cy.get pelo cy.contains
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    // Exercicio extra 2
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Grilo')
        cy.get('#email').type('email_invalido@')
        cy.get('#open-text-area').type('Exercicio extra 2 do 02.md')
        //cy.get('button[type="submit"]').click() //Exercicio 8 substituindo cy.get pelo cy.contains
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    // Exercicio extra 3
    it('Telefone não aceita letras, somente numeros', function () {
        cy.get('#phone')
            .type('abcdef')
            .should('have.value', '')
    })

    // Exercicio extra 4
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Grilo')
        cy.get('#email').type('joao_grilo@tat.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Realizando exercicio extra 4 do 02.md')
        //cy.get('button[type="submit"]').click() //Exercicio 8 substituindo cy.get pelo cy.contains
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    // Exercicio extra 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
            .type('João')
            .should('have.value', 'João')
            .clear()
            .should('have.value', '')

        cy.get('#lastName')
            .type('Grilo')
            .should('have.value', 'Grilo')
            .clear()
            .should('have.value', '')

        cy.get('#email')
            .type('joao_grilo@tat.com')
            .should('have.value', 'joao_grilo@tat.com')
            .clear()
            .should('have.value', '')

        cy.get('#phone')
            .type('11987555')
            .should('have.value', '11987555')
            .clear()
            .should('have.value', '')
    })

    // Exercicio extra 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        //cy.get('button[type="submit"]').click() //Exercicio 8 substituindo cy.get pelo cy.contains
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    // Exercicio extra 7
    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit('Zé', 'Mané', 'manezim@teste.com', 'Realizando exercicio extra 7 do 02.md')
        cy.get('.success').should('be.visible')
    })

    // Exercicio extra 8
    it('Usando cy.contains ao invés de cy.get para encontrar o botão Enviar', function () {
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Grilo')
        cy.get('#email').type('joao_grilo@tat.com')
        cy.get('#open-text-area').type('Realizando exercicio extra 8 do 02.md')
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

})

describe('Aula e exercicios contidos em /lessons/03.md', function() {

    beforeEach(function () {
        cy.visit('./src/index.html')
    });

    // Exercicio
    it('seleciona um produto (YouTube) por seu texto', function () {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
        
    })

    // Exercicio extra 1
    it('seleciona um produto (Mentoria) por seu valor (value)', function () {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
        
    })

    // Exercicio extra 2
    it('seleciona um produto (Mentoria) por seu valor (value)', function () {
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
        
    })
})

describe('Aula e exercicios contidos em /lessons/04.md', function() {

    beforeEach(function () {
        cy.visit('./src/index.html')
    });

    // Exercicio
    it('marca o tipo de atendimento "Feedback"', function() {
        // minha solução
/*         cy.get('input[type="radio"]')
            .check('feedback')
            .should('be.checked') */

        // solução do instrutor
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value', 'feedback')
    })

    // Exercicio extra 1
    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio) {
                cy.wrap($radio)
                    .check()
                    .should('be.checked')
            })
    })
    
})

describe('Aula e exercicios contidos em /lessons/05.md', function() {

    beforeEach(function () {
        cy.visit('./src/index.html')
    });

    // Exercicio
    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked')
        
    })
    
    // Exercicio extra
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Grilo')
        cy.get('#email').type('joao_grilo@tat.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Realizando exercicio extra 4 do 02.md')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })
})

describe('Aula e exercicios contidos em /lessons/06.md', function() {

    beforeEach(function () {
        cy.visit('./src/index.html')
    });

    // Exercicio
    it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('cypress/fixtures/example.json')
            .should(function($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    // Exercicio extra 1
    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
            .should(function($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    // Exercicio extra 2
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
            .selectFile('@sampleFile')
            .should(function($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })
    
})

describe('Aula e exercicios contidos em /lessons/07.md', function() {

    beforeEach(function () {
        cy.visit('./src/index.html')
    });

   // Exercicio
   it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
   })

   // Exercicio extra 1
   it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
        
        cy.contains('Talking About Testing').should('be.visible')
   })

})

describe('Aula e exercicios contidos em /lessons/11.md', function() {

    const THREE_SECONDS_IN_MS = 3000
    
    beforeEach(function () {
        cy.visit('./src/index.html')
    });

    it('Usando funcao clock() e tick() 1', function () {
        const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste.'
        
        cy.clock()
        
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Grilo')
        cy.get('#email').type('joao_grilo@tat.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')

        cy.tick(THREE_SECONDS_IN_MS)

        cy.get('.success').should('not.be.visible')
    })

    // Exercicio extra 2
    it('Usando funcao clock() e tick() 2', function () {

        cy.clock()
        cy.get('#firstName').type('João')
        cy.get('#lastName').type('Grilo')
        cy.get('#email').type('email_invalido@')
        cy.get('#open-text-area').type('Exercicio extra 2 do 02.md')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

        cy.tick(THREE_SECONDS_IN_MS)

        cy.get('.success').should('not.be.visible')
    })

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', function() {
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
          .invoke('hide')
          .should('not.be.visible')
        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
    })

    it('preenche a area de texto usando o comando invoke', function () {
        const longText = Cypress._.repeat('0123456789 ', 20)

        cy.get('#open-text-area')
            .invoke('val', longText)
            .should('have.value', longText)
    })

    it('faz uma requisição HTTP', function() {
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
            .should(function(response) {
                const {status, statusText, body } = response
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
                expect(body).to.include('CAC TAT')
            })
    })

})

describe('Aula e exercicios contidos em /lessons/12.md', function() {

    beforeEach(function () {
        cy.visit('./src/index.html')
    });
    
    // Exercicio
    it('encontre o gato escondido', function() {
         cy.get('#cat')
         .invoke('show')
         .should('be.visible')

        cy.get('#title')
            .invoke('text', 'CAT TAT')

        cy.get('#subtitle')
            .invoke('text', 'Subtitulo agora é gatos')
    })
    
})