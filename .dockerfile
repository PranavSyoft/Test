FROM node:20

COPY package*.json ./

WORKDIR ./

COPY . .

RUN npm install
EXPOSE 4000
CMD [ "nodemon", "index.js" ]