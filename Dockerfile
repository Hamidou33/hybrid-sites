FROM node:lts-alpine
LABEL authors="hamid33130"

RUN apk update && \
    apk add --no-cache openssh-client && \
    apk add --no-cache lftp
