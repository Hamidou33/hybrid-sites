#FROM node:current-alpine
#
#LABEL authors="hamid"
#
#WORKDIR /app
#
#COPY ./node_modules /app/node_modules
#
#COPY package.json /app/package.json
#
#COPY ./nest-cli.json /app/nest-cli.json
#
#COPY ./tsconfig.json /app/tsconfig.json
#
#COPY ./tsconfig.build.json /app/tsconfig.build.json
#COPY package-lock.json /app/package-lock.json
#RUN npm ci
#RUN npm run build
#EXPOSE 3000
#CMD ["node", "dist/main"]


FROM node:current-alpine AS development

WORKDIR /src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:current-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /src/app/

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /dist ./dist

CMD ["node", "dist/main"]
