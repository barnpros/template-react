#!/bin/bash
export APP_VERSION=$(curl -H 'Authorization: token fb6b225a8359d79f8a562cd73675afe3f881f034' -L http://api.github.com/repos/barnpros/timepunch_web/tags | jq '.[0].name' | tr -d '"')

docker-compose up -d