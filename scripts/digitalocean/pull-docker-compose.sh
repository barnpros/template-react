# Pulls the docker compose file from Github's master branch
curl -H 'Authorization: token fb6b225a8359d79f8a562cd73675afe3f881f034' -H 'Accept: application/vnd.github.v3.raw' -L https://api.github.com/repos/barnpros/timepunch_web/contents/docker-compose.yml?ref=master > docker-compose.yml