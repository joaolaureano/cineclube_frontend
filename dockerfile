FROM node:14.16.1-alpine3.10 AS base
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
