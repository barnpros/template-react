#!/bin/bash
APP_VERSION=$(curl -H 'Authorization: token YOUR_GITHUB_API_TOKEN_HERE' -L http://api.github.com/repos/YOUR_GITHUB_USERNAME_HERE/YOUR_REPOSITORY_NAME_HERE/tags | jq '.[0].name' | tr -d '"')
export APP_VERSION="$APP_VERSION-staging"

docker-compose up -d