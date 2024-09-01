# Step 1: Build the React app
# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app with Nginx
# Use an official Nginx image as a parent image
FROM nginx:alpine

# Copy the React app build files to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]