# Use a base image
FROM node:14

# Set the working directory
WORKDIR /app

COPY package*.json ./

# Install the project dependencies
RUN npm install

COPY . .

EXPOSE 8888
Run npm install pm2 -g
CMD ["pm2-runtime", "ecosystem.config.js"]
