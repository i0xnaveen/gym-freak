# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app/client

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install client dependencies
RUN npm install -f

# Copy the client source code to the container
COPY . .

# Expose the port the app runs on (if needed)
 EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
