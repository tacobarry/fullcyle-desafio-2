FROM nginx:1.17.6-alpine

RUN apk add bash vim

WORKDIR /etc/nginx/

RUN rm -rf conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf
