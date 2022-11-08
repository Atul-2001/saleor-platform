FROM nginx:stable

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs

WORKDIR /macaw-ui

RUN npm install --force

RUN npm run build

WORKDIR /app

COPY package.json ./

RUN npm install --force

COPY . .

RUN npm run build

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf