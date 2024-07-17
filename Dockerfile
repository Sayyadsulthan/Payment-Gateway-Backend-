# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 8000

# Define environment variable
ENV NODE_ENV=production

# not required 
# Build the app (if you have any build scripts)
# RUN npm run build

# Start the app
CMD ["node", "index.js"]
