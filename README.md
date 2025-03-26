# PIA Empresa - Análise de Dados

### **Objetivo**

O objetivo deste projeto é **desenvolver uma aplicação frontend** para **exibição e análise de dados** da **Pesquisa Industrial Anual - Empresa (PIA Empresa)** do IBGE. A aplicação consome a **API SIDRA**, fornecendo uma interface amigável para exibir os dados em **tabelas dinâmicas** e **gráficos interativos**.

---

## **Tecnologias Utilizadas**

- **Vue.js 3**: Framework JavaScript progressivo para construção da interface.
- **Nuxt 3**: Framework avançado que utiliza SSR (Server-Side Rendering) e SPA (Single Page Application).
- **Vuetify**: Biblioteca de componentes UI baseados em Material Design.
- **Docker**: Para containerizar e simplificar o ambiente de execução.
- **Node.js (v20 ou superior)**: Ambiente de execução JavaScript para desenvolvimento.

---

## **Funcionalidades**

1. **Consumo de dados via API SIDRA**: Integração direta para exibição dos dados disponíveis.
2. **Tabelas dinâmicas**: Exibição de dados de forma organizada e fácil de interpretar.
3. **Gráficos interativos**: Visualização dinâmica dos dados para facilitar a análise.
4. **Interface Responsiva**: Adaptada para diferentes tamanhos de tela, utilizando Vuetify.
5. **Containerização**: Configuração containerizada com Docker para facilitar o deploy.

---

## **Como Rodar o Projeto**

### Pré-requisitos

Certifique-se de que você possui os seguintes itens instalados:

- **Docker** (Recomenda-se a versão mais recente)
- **Node** (Recomenda-se a versão mais recente)

---

### Passos para Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/raaylsonalves/challenge-fiec-pia.git
   crie um .env apartir do example.env
   cd challenge-fiec-pia
   yarn 
   yarn dev

   ou

   docker-compose up --build