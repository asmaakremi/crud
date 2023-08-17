#first stage of building angular image
FROM node:latest as build 
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install  

#copy and publish app
COPY . . 
RUN npm run build --prod

#final stage 
FROM nginx:alpine
COPY --from=build /app .

