FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port and start application
EXPOSE 5173
CMD ["npm", "run", "dev"]
