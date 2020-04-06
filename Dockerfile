# Base Image
FROM node:13.12.0-stretch-slim as base
RUN apt-get update && apt-get install -y \
  git
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
EXPOSE 3000
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json yarn.lock ./
RUN yarn && yarn cache clean

# Develop Image
FROM base as dev
ENV NODE_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH
CMD ["node","server.js"]

# Source Image
FROM base as source
COPY --chown=node:node . .

# Production Image
FROM source as prod
ENV NODE_ENV=production
RUN yarn build
ENTRYPOINT ["/tini", "--"]
CMD ["yarn","start"]