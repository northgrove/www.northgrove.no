# Use an official Python runtime as a parent image
FROM node:10.8.0-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN npm install
RUN npm run build

# Make port 80 available to the world outside this container
EXPOSE 8080

# Run app.py when the container launches
CMD ["node", "app.js"]