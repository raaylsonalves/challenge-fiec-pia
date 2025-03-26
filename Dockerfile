# Usa uma imagem oficial do Node para construir o projeto
FROM node:18-alpine AS builder

WORKDIR /app

# Copia o arquivo de dependências
COPY package.json yarn.lock ./

# Instala as dependências
RUN yarn install

# Copia todos os arquivos do projeto (incluindo .env)
COPY . .

# Constrói o projeto Nuxt para produção
RUN yarn build

# Configura o servidor para produção
FROM node:18-alpine

WORKDIR /app

# Copia os arquivos de saída do build
COPY --from=builder /app/.output /app/.output

# Copia o .env para o contêiner
COPY .env /app/.env

# Exponha a porta padrão do Nuxt
EXPOSE 3000

# Inicia o servidor Nuxt
CMD ["node", ".output/server/index.mjs"]