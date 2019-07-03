FROM node:latest

# # where the app will live in the container
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./ 

RUN npm install 

# Bundle app source
COPY . .

## Expose the port
EXPOSE 3008

CMD [ "npm", "start" ]