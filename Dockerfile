# syntax = docker/dockerfile:experimental

# Base Image
FROM node:13.14.0-stretch-slim as base
RUN apt-get update && apt-get install -y \
    autoconf automake libtool nasm libgl1-mesa-dev libxi6
EXPOSE 3000
RUN mkdir /app && chown -R node:node /app
USER node
WORKDIR /app
COPY --chown=node:node package.json yarn.lock ./
RUN mkdir -p /home/node/.cache
RUN yarn install --pure-lockfile
COPY --chown=node:node . ./
COPY --chown=node:node tailwind.config.js src

# Develop Image
FROM base as dev
ENV NODE_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH
CMD ["yarn","dev"]

# Build Image
FROM base as build
RUN yarn build
USER root
RUN chown root:root /app/package.json /app/yarn.lock /app/.env
RUN chown -R root:root /app/.next

# Production Image
FROM node:13.14.0-stretch-slim as prod
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
EXPOSE 3000
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
ENV NODE_ENV=production
COPY --from=build /app/package.json /app/yarn.lock /app/.env ./
RUN yarn install --pure-lockfile --production
COPY --from=build /app/.next ./.next
ENTRYPOINT ["/tini", "--"]
CMD ["yarn","start"]