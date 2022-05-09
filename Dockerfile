FROM node:16.14.2-alpine3.15
RUN mkdir -p /usr/src/app
ENV PORT 3000
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install
RUN cd build
RUN npm run build

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm","start","--reset-cache"]
