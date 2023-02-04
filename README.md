# Project React | TypeScript | Material Ui

Esse projeto _react_ será criado utilizando a biblioteca de componentes _Material ui_ e _Typescript_.
O objetivo é aprender a usar de forma mais complexa a biblioteca e também de criar um passo a passo, para facilitar a criação de novos projetos, tanto para que eu possa utilizar, como desenvolvedor jr, e para colegas caso assim desejem.
_ps_: Sempre vá no link para verificar se houve alguma modificação.

### Passo 01

### Passo 02

### Passo 03

### INSTALANDO O _MATERIAL UI_

https://mui.com/

- com _yarn_ yarn add @mui/material @emotion/react @emotion/styled
- com _yarn_ add @mui/icons-material

Fontes _Google Web Fonts_ e _Icons_ : Copiar e colar dentro do Index.html

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

### LEMBRA DOS TEMAS DO PROJETO

Não esquece de fazer os temas.

### PEQUENA EXPLICAÇÃO DOS COMPONENTES MUI

- <Drawer> Ele pode receber as propriedades:
  _open_ onde eu posso definir quando ele abre e fecha
  _variant_ onde posso definir se ele e fixo ou não
  _onClose_ e uma propriedade que voce usa para fechar o drawer caso vc clique fora, so passar a função setBlabla

- Existe uma diferença entre o <box> @mui/material e do <box> @mui/system
- o hook _useTheme_ do @mui/material pode acessar o tema na página.

-O material ui tem uma unidade de medida própria _theme.spacing(28)_ 1=4px 2=8px 3=12px, porque usar isso?

### useMediaQuery para controlar a responsividade no material

theme.breakpoints.down : controla quando a nossa tela tiver menor que o brakpoint passado
theme.breakpoints.keys : indica todos os brakpoints disponiveis
theme.breakpoints.not : coloquei sm quando a tela tiver no tamanho sm ele retorná false e true para todas as outras
theme.breakpoints.only : coloquei sm quando a tela tiver no tamanho sm ele retornará true, e false para as outras.
theme.breakpoints.up : coloquei sm sempre q a tela tiver a cima de sm ele retorna true
theme.breakpoints.value : devolve os valores dos breakpoints
theme.breakpoints.value : pode colocar start e end entre os breakpoints ele pode retornar true ou false.
