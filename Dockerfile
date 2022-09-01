FROM node:16.5.0-alpine

WORKDIR /yandit-air-quality-api

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]