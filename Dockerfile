FROM node:12.2.0-alpine

EXPOSE 8080

WORKDIR /app

COPY . .
RUN npm install
RUN npm install @vue/cli -g

CMD ["npm", "run", "serve"]
