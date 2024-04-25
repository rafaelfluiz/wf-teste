# Pré-Requisitos
Antes de iniciar, certifique-se de ter instalado:

Node.js (versão recomendada ou superior)
npm ou Yarn
PostgreSQL (ou qualquer outro sistema de gerenciamento de banco de dados, se aplicável)

# Instalação
Para instalar este projeto, siga estas etapas:

1. Clonar o Repositório
### `git clone https://github.com/rafaelfluiz/wf-teste/tree/master`
### `cd back`

2. Instalar DependênciasDentro do diretório do projeto, execute:
# Getting Started with Create React App
### `npm install`
Isso instalará todas as dependências necessárias para rodar o projeto conforme definido no arquivo package.json.

3. Configuração de Variáveis de AmbienteCopie o arquivo .env.example para .env e ajuste as variáveis conforme necessário:
### `cp .env.example .env`

Preencha as variáveis no arquivo .env com as configurações adequadas:
```
DB_HOST=localhost
DB_USER=meu_usuario
DB_PASS=minha_senha
DB_NAME=meu_banco_de_dados
PORT=3000
```


# Executar Localmente
Para rodar este projeto localmente em sua máquina, execute o seguinte comando no terminal:

### `npm run dev`

Este comando irá iniciar o servidor de desenvolvimento e abrirá automaticamente uma aba no seu navegador padrão. Se o navegador não abrir automaticamente, você pode acessar http://localhost:3000 manualmente.

# Endpoints da API

Liste todos os endpoints disponíveis com descrições breves, métodos HTTP e possíveis códigos de resposta. Por exemplo:


```
GET /api/users - Retorna todos os usuários.
```

```
POST /api/users - Adiciona um novo usuário. Espera um payload JSON com dados do usuário.
```

```
GET /api/users/:id - Retorna um usuário específico pelo ID.
```