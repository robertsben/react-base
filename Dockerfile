FROM node:8-alpine

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

# Install app dependencies
COPY package.json /src/app/
RUN npm install

# Bundle app source
COPY . /src/app

# Build and optimize react app
RUN npm run build

# Get rid of all the dev node modules
RUN rm -r node_modules

# set node environment to production
ENV NODE_ENV production

# Install prod dependencies
RUN npm install

#Expose our running port
EXPOSE 3000

# defined in package.json
CMD [ "npm", "start" ]