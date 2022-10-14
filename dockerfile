FROM node:15.4 as build 
# Create a app directory, copy package.json into it and run npm install
# since package.json doesn't change frequenctly, this layer will be cached because docker will check if package.json has any changes
# if app directory is not used, the whole step (npm install) will be executed for every build
WORKDIR /app
# Copy only package.json and package-lock.json to app folder
COPY package*.json /app/
RUN npm install
# Copy everything to app folder and build
COPY ./ /app/
RUN npm run build

FROM nginx:1.19
# Copy nginx configuration
COPY ./nginx.conf /etc/nginx/nginx.conf 
# Copy build files from build stage
COPY --from=build /app/build /usr/share/nginx/html
