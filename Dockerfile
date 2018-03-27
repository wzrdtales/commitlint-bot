FROM node:8

WORKDIR /home/node
USER node

COPY . /home/node

EXPOSE 5000

CMD [ "npm", "start" ]

