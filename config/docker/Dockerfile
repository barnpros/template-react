#* ###########################
#* ##### Stage 0: Base #######
#* ###########################
FROM node:12.18.1-buster-slim as base

# Ensure container is up to date
RUN apt-get update && apt-get install --no-install-recommends --yes openssl

# Establish working directory to contain application
WORKDIR /app

#* ###########################
#* #### Stage 1: Builder #####
#* ###########################
FROM base as builder

# Copy configuration files used for builing application
COPY package.json yarn.lock .npmrc tsconfig.json .env* ./
COPY scripts/build.js ./scripts

# Install Production Dependencies
RUN yarn install --production --pure-lockfile
RUN mkdir tmp && mv ./node_modules ./tmp/node_modules

# Install Dev Dependencies
RUN yarn install --pure-lockfile

# Copy source code and type definitions
COPY types ./types
COPY src ./src

# Build applicaton
RUN yarn build

#* ###########################
#* ##### Stage 2: Nginx ######
#* ###########################
FROM nginx:1.19.0-alpine

# Set up Nginx config and remove default files
RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf
COPY ./config/docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy Production Dependencies
COPY --from=builder /app/tmp/node_modules /usr/share/nginx/html/node_modules

# Copy Application
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP and HTTPS ports
EXPOSE 80 443
