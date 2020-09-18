FROM node:12

WORKDIR . /app

VOLUME [ "/public/uploads" ]

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "start" ]
