FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.output /app/.output

COPY .env /app/.env

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]