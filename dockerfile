FROM node:18-alpine3.14

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN npm install

EXPOSE 8080 3000

CMD npm run start:dev