# Project React | TypeScript | Material Ui

Esse projeto _react_ será criado utilizando a biblioteca de componentes _Material ui_ e _Typescript_.
O objetivo é aprender a usar de forma mais complexa a biblioteca, para facilitar a criação de novos projetos.
_ps_: Sempre vá no link para verificar se houve alguma modificação.

### Passo 01

### Passo 02

### Passo 03

### INSTALANDO O _MATERIAL UI_

https://mui.com/

- yarn add @mui/material @emotion/react @emotion/styled
- yarn add @mui/icons-material

Fontes _Google Web Fonts_ e _Icons_ : Copiar e colar dentro do Index.html

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

### Configurando Temas

### O material ui tem uma unidade de medida própria _theme.spacing(28)_ 1=4px 2=8px 3=12px.

### usar o useMediaQuery para controlar a responsividade no material

## Configurando um backend para o projeto utilizando o json-server

### Como usar:

1. Abra uma nova aba no terminal
2. Execute o comando:

   caso instalado -D

   `npx json-server -w -p 3333 ./mock/database.json`

   caso instalado -g

   `json-server -w -p 3333 ./mock/database.json`

## Você pode automatizar o processo no package.json:

1. Em scripts

   ` "mock": "json-server --watch -p 3333 ./mock/database.json"`

2. Então depois usar o comando

   `npm mock`

### Utilizando axios para fazer as requisições

### Variáveis de Ambiente

### Instalar @types/node para tipagens node
