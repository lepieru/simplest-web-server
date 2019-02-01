FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --only=production
COPY . .

EXPOSE 8080
ENTRYPOINT ["npm", "run", "start"]
