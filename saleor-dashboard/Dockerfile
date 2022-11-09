FROM node:14 as builder

WORKDIR /macaw-ui

RUN npm install --force

RUN npm run build

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

FROM nginx:stable

WORKDIR /app

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build/* /app/