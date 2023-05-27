# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm ci --production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application listens on (assuming it's 3000)
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
