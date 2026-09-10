# Relógio do Reino

Aplicação Front-end desenvolvida em React + Vite que consome uma API REST de consulta de data e hora, exibindo um relógio medieval em tempo real.

## Objetivo

Exibir a data e hora atuais fornecidas por uma API externa, atualizadas automaticamente a cada segundo, com visual temático de pergaminho medieval.

## Tecnologias

- React
- JavaScript
- HTML5
- CSS3
- Vite

## Funcionamento

1. A aplicação carrega e consulta automaticamente a API.
2. Utiliza `setInterval` de 1 segundo para atualizar os dados continuamente.
3. Exibe hora, data e data/hora completas em um cartão temático medieval.
4. Em caso de falha, exibe mensagem de erro estilizada.

## Estrutura do projeto

```
frontend-data-hora/
├── src/
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── .env.example
├── .gitignore
└── README.md
```

## Como instalar

```bash
npm install
```

## Como executar localmente

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edite o `.env` e informe a URL da API:
   ```env
   VITE_API_URL=https://api-datahora-km6m.onrender.com
   ```

3. Execute:
   ```bash
   npm run dev
   ```

4. Acesse no navegador o endereço exibido no terminal.

## Como configurar a URL da API

A URL da API fica centralizada em uma variável de ambiente.

Em `.env`:
```env
VITE_API_URL=https://api-datahora-km6m.onrender.com
```

E no código:
```js
const API_URL = import.meta.env.VITE_API_URL
```

Na requisição:
```js
fetch(`${API_URL}/api/data-hora`)
```

## Arquivo responsável pela comunicação com a API

`src/services/api.js`

Esse arquivo concentra toda a lógica de requisição HTTP usando `fetch()`, incluindo validação da URL, timeout de 10 segundos com `AbortController`, tratamento de erros HTTP, validação da resposta JSON e lançamento de mensagens amigáveis.

## Deploy no Vercel

### Conectando o repositório

1. Acesse [https://vercel.com/new](https://vercel.com/new)
2. Faça login com sua conta GitHub.
3. Em **Import Git Repository**, selecione o repositório do Front-end.
4. Clique em **Import**.

### Configurando variável de ambiente

1. Na tela de configuração do projeto, vá em **Environment Variables**.
2. Adicione:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://api-datahora-km6m.onrender.com`
3. Clique em **Save**.

### Realizando o deploy

1. Clique em **Deploy**.
2. Aguarde o build finalizar.
3. Acesse a URL fornecida pelo Vercel para testar a aplicação.

### Testando depois do deploy

- Abra a URL pública do Vercel.
- Verifique se a hora é atualizada automaticamente a cada segundo.
- Em caso de erro, confira se `VITE_API_URL` está correta e se a API no Render está acessível.

## Como o Front-end se comunica com a API

```
USUÁRIO
   ↓
FRONT-END (Vercel)
   ↓ useEffect + setInterval (1s)
HTTP GET /api/data-hora
   ↓
API REST (Render)
   ↓ JSON
FRONT-END atualiza estados
   ↓
Hora e data na tela
```

O `useEffect` em `src/App.jsx` inicia um `setInterval` que chama `consultar()` a cada 1 segundo.
Ela chama `buscarDataHora()` definida em `src/services/api.js`.
Essa função faz a requisição usando `fetch()`, processa o JSON e retorna os dados para exibição.

## Licença

Este projeto foi desenvolvido para fins acadêmicos.
