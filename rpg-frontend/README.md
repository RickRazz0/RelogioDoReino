# Pergaminho dos Heróis - Gerador de Ficha de RPG

Aplicação front-end em **React + Vite** desenvolvida como projeto da aula de **Front-End com Davidson**. O app consome uma API REST feita em **Express** para gerar fichas de personagens de RPG com raça, classe, nível, atributos e pontos de vida.

## Funcionalidades

- Geração de personagens de RPG ao abrir a aplicação ou ao clicar no botão principal
- Exibição de ficha estilizada em formato de pergaminho medieval
- Avatar vetorial dinâmico em SVG, adaptado por raça, em estilo line art sem rosto
- Tema medieval com fontes decorativas, paleta dourada/amadeirada e elementos visuais imersivos

## Tecnologias

- React
- Vite
- CSS puro
- Express (API back-end)
- Fetch API para comunicação com o back-end

## Estrutura

- `src/App.jsx` - componente principal, estado do personagem, consumo da API e layout da ficha
- `src/App.css` - estilos do tema medieval
- `src/Avatar.jsx` - componente de avatar vetorial por raça
- API Express em `http://localhost:3000/personagem`

## Como rodar

1. Instale as dependências
2. Inicie a API Express na porta 3000
3. Rode o front-end com Vite
4. Acesse a aplicação e clique em **Invocar Novo Personagem**

## Observações

- O avatar é gerado por SVG sem preenchimento facial, mantendo identidade visual por raça sem uso de imagens externas
- O fundo do avatar usa gradiente radial claro para contraste com o pergaminho
- A paleta do avatar muda conforme a raça do personagem retornado pela API
