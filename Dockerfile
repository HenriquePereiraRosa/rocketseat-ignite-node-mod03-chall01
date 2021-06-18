
FROM node:14.17.0-alpine3.13

WORKDIR /user/app

COPY package.json ./

# RUN npm install
RUN yarn

COPY . .

# RUN yarn typeorm migration:run -> not working due to containers indepedency in v3.7

EXPOSE 3333

CMD ["yarn", "dev"]