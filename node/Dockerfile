FROM node:16.17.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# run server
EXPOSE 8000

CMD [ "npm", "start" ]

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD wget -q --spider http://localhost:8000/_health || exit 1
