# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app/server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy the server source code to the container
COPY . .

# Expose the port the app runs on (if needed)
 EXPOSE 3001

# Define the command to run your application
CMD ["npm", "start"]
