# Use the official image as a parent image
FROM node:16-alpine as builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./


RUN apk add --no-cache python3
RUN apk add --no-cache build-base
RUN npm cache clean --force
RUN rm -rf node_modules


# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the application will be running on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
