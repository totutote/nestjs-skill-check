# Use the official Node.js image as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install useful global tools for development
RUN npm i -g @nestjs/cli

# Expose the application port for NestJS (dev server runs on 3000 by default)
EXPOSE 3000

# Note: The actual start command is provided by docker-compose for dev (npm run start:dev)