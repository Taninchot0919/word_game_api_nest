FROM node:18.14-alpine

WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN yarn build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["yarn", "start:prod"]