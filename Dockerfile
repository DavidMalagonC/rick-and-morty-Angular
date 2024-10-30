FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:ssr
EXPOSE 8080
CMD ["node", "dist/rick-and-morty-angular/server/main.js"]