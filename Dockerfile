# build stage
FROM quay.io/jitesoft/node:latest as build-stage
WORKDIR /shoping-cart
COPY shopping-cart/package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM quay.io/jitesoft/nginx:latest
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /Projectweek4
COPY --from=build-stage /shopping-cart/dist .
EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]
