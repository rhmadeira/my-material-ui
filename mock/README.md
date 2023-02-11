# Como usar

1. Abra uma nova aba no terminal
2. Execute o comando:

   caso instalado -D

   `npx json-server -w -p 3333 ./mock/database.json`

   caso instalado -g

   `json-server -w -p 3333 ./mock/database.json`

# Você pode automatizar o processo no package.json

1. Em scripts

   ` "mock": "json-server --watch -p 3333 ./mock/database.json"`

2. Então depois usar o comando

   `npm mock`
