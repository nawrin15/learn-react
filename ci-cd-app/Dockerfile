FROM node:14-alpine3.15 as build


RUN mkdir -p /code/label-hub
COPY . /code/ci-cd-app/
WORKDIR /code/ci-cd-app/
RUN ls 
RUN npm install
RUN npm run build
# RUN yarn build
# FROM nginx:1.17.8-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]