FROM node:18

WORKDIR /usr/src/app

# Install build tools for native modules
RUN apt-get update && apt-get install -y python3 g++ make git && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci

COPY . .
EXPOSE 8080
CMD ["npm", "run", "prod"]
