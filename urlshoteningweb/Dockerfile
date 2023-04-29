
# Stage 1
FROM node:18.14.0-alpine3.17 as node
WORKDIR /app
COPY ./package.json ./package-lock.json ./
COPY . .
RUN npm install
RUN npm run build
# Stage 2
FROM nginx:1.23.4-alpine-slim
COPY --from=node /app/dist/urlshortening /usr/share/nginx/html
