# build
FROM node:17-alpine as builder

WORKDIR /app

COPY . .

RUN npm i \
  && npm run build

# nginx
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx"]
CMD ["-g daemon off;"]
