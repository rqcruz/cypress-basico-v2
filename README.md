# Testes automatizados com Cypress - Básico

## Sobre o projeto
👋 Seja bem-vindo(a)!

Esse projeto tem como objetivo o estudo e prática dos exercicios do curso [Cypress Básico](https://www.udemy.com/course/testes-automatizados-com-cypress-basico) ministrado pelo grande [Walmyr Filho](https://github.com/wlsf82)

## Pré-requisitos

Esse projeto tem como pré-requisitos a instalação:

- Node v18.17.1
- npm v10.8.3

## Instalação

Para instalar as dependências do projeto, via terminal, acessar o diretório clonado `cd /usuario/cypress-basico-v2` e executar o comando `npm i` ou `npm install`

### Versão do Cypress

Para ter compatibilidade com o material do curso, a versão utilizada do Cypress é a `9.5.1`

## Executando os testes

Via linha de comando, acessar o diretório `cd /usuario/cypress-basico-v2` e, dependendo do tipo de testes que queira rodar, executar um dos comandos abaixo:

Modo navegador por interface gráfica:
> npm run cy:open

Modo mobile por interface gráfica:
> npm run cy:open:mobile

Modo navegador sem interface gráfica (headless):
> npm run test

Modo mobile sem interface gráfica (headless):
> npm run test:mobile
