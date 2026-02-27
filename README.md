# 🛒 Sistema de Compras | JavaScript

Aplicação web desenvolvida com **JavaScript puro (Vanilla JS)** para simular um carrinho de compras no navegador, permitindo adicionar, remover produtos e visualizar o resumo da compra com cálculo automático de desconto.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- Praticar lógica de programação com JavaScript
- Manipular o DOM dinamicamente
- Trabalhar com arrays e objetos para controle de estado
- Validar dados de formulário no front-end
- Implementar regras de negócio em um cenário realista

---

## 🚀 Funcionalidades

### 📦 Cadastro de Produtos
- Adicionar produto informando:
  - Nome
  - Preço
  - Quantidade
- Validação de campos obrigatórios
- Bloqueio de valores inválidos (preço ou quantidade ≤ 0)
- Impede inconsistência de preço para produto já existente
- Soma automaticamente a quantidade ao adicionar produto repetido

### 📋 Listagem do Carrinho
- Exibição de:
  - Nome do produto
  - Preço unitário
  - Quantidade
  - Subtotal por item
- Remoção individual de produtos
- Atualização automática da interface

### 💰 Resumo da Compra
- Cálculo automático de:
  - Total bruto
  - Percentual de desconto
  - Valor do desconto
  - Total final com desconto aplicado

---

## 📊 Regras de Desconto

- 1 a 2 itens → **0%**
- 3 a 5 itens → **5%**
- 6 a 9 itens → **10%**
- 10 ou mais itens → **15%**

O desconto é aplicado com base na quantidade total de itens no carrinho.

---

## 🧠 Conceitos Aplicados

### Estruturas de Dados
- `array` para armazenar os produtos
- `object` para representar cada item do carrinho

### Métodos de Array
- `find`
- `map`
- `filter`
- `forEach`

### Manipulação do DOM
- `getElementById`
- `createElement`
- `textContent`
- `appendChild`
- `innerHTML`

### Outros Conceitos
- Funções para separação de responsabilidades
- Condicionais (`if/else`) para validações e regras de desconto
- Eventos com `addEventListener`
- Formatação de números com `toFixed()`
- Atualização dinâmica da interface

---

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

---

## 📂 Estrutura do Projeto

```
Sistema_ComprasJS-Basico/
├── index.html
├── style.css
└── script.js
```

---

## 🌐 Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` no navegador

---

## 📈 Aprendizados

Durante o desenvolvimento, pratiquei:

- Planejamento e divisão do problema em partes menores
- Controle de estado da aplicação com arrays e objetos
- Validação de entradas do usuário
- Renderização dinâmica de elementos no DOM
- Aplicação prática de métodos de array
- Implementação de regras de negócio baseadas em condições
- Cálculo e exibição de totais em tempo real
- Organização do código em funções com responsabilidades bem definidas

---

## 👩‍💻 Desenvolvido por

Melissa Felix Santos   

Projeto criado como parte do meu processo contínuo de aprendizado.
