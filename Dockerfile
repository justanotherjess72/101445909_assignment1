# Use the official Node.js image as a base
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the application dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port (e.g., 3000)
EXPOSE 3000

# Use JSON array syntax for CMD
CMD ["node", "src/index.js"] 
